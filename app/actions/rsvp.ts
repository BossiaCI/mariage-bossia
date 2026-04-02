'use server';

import { revalidatePath } from 'next/cache';
import prisma from '@/lib/prisma';

export async function createConfirmation(formData: FormData) {

  // const data = Object.fromEntries(formData.entries());

  const lastName = formData.get('lastName') as string;
  const firstName = formData.get('firstName') as string;
  let attendance = false;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;
  const dietary = formData.get('dietary') as string;
  const guests = Number(formData.get('guests') || 0);

  guests > 0 ? attendance = true : false;

  const post = await prisma.confirmation.create({
    data: {
        lastName,
        firstName,
        attendance,
        email,
        message,
        dietary,
        guests,
    },
  });

  revalidatePath('/rsvp');
  return post;
}

// export async function publishPost(postId: string) {
//   const post = await prisma.post.update({
//     where: { id: postId },
//     data: { published: true },
//   });

//   revalidatePath('/posts');
//   revalidatePath(`/posts/${postId}`);
//   return post;
// }

// export async function deletePost(postId: string) {
//   await prisma.post.delete({
//     where: { id: postId },
//   });

//   revalidatePath('/posts');
// }


export async function deleteConfirmation(id: number) {
  await prisma.confirmation.delete({
    where: { id },
  });

  revalidatePath('/rsvp/list');
}