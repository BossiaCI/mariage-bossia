'use server';

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import nodemailer from 'nodemailer';


interface ConfirmationForm {
  lastName: string;
  firstName: string;
  attendance: boolean;
  email: string;
  message?: string;
  dietary?: string;
  guests?: number;
  accompanyingGuests?: string;
}

export async function createConfirmation(formData: FormData) {
  const lastName = (formData.get('lastName') as string)?.trim();
  const firstName = (formData.get('firstName') as string)?.trim();
  const email = (formData.get('email') as string)?.trim();
  const message = (formData.get('message') as string) || '';
  const dietary = (formData.get('dietary') as string) || '';
  const accompanyingGuests = (formData.get('accompanyingGuests') as string) || '';

  // Attendance comes as "yes" / "no" string
  const attendance = (formData.get('attendance') as string) === 'yes';

  // Guests default to 0 if not provided
  const guests = Number(formData.get('guests') || 0);

  // Check if email already exists
  const existing = await prisma.confirmation.findUnique({
    where: { email },
  });

  if (existing) {
    return { error: 'EMAIL_EXISTS' }; // frontend will handle this
  }

  // Create new confirmation
  const post = await prisma.confirmation.create({
    data: {
      lastName,
      firstName,
      attendance,
      email,
      message,
      dietary,
      guests,
      accompanyingGuests,
    },
  });

  // Revalidate RSVP page
  revalidatePath('/rsvp');

  return post;
}

export async function deleteConfirmation(id: number) {
  await prisma.confirmation.delete({ where: { id } });
  revalidatePath('/rsvp/list');
}

export async function updateConfirmation(id: number, data: any) {
  await prisma.confirmation.update({ where: { id }, data });
  revalidatePath('/rsvp/list');
}

export async function sendRSVPEmail(data: any[]) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const content = data
    .map(
      (c) =>
        `${c.firstName} ${c.lastName} - ${
          c.attendance ? 'Yes' : 'No'
        } (${c.guests})`
    )
    .join('\n');

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: 'planner@email.com',
    subject: 'RSVP List',
    text: content,
  });
}


function toBoolean(value: any): boolean {
  if (typeof value === 'boolean') return value;

  return ['true', '1', 'yes', 'on']
    .includes(value?.toString().toLowerCase());
}