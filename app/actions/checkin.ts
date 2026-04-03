'use server';
import QRCode from 'qrcode';
import prisma from '@/lib/prisma';

export async function generateQRCodeForGuest(guestId: number) {
  const guest = await prisma.confirmation.findUnique({ where: { id: guestId } });
  if (!guest) throw new Error('Guest not found');

  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/rsvp/checkin/${guestId}`;
  const qrDataUrl = await QRCode.toDataURL(url, { errorCorrectionLevel: 'H' });

  return qrDataUrl;
}

export async function markCheckedIn(guestId: number) {
  const guest = await prisma.confirmation.findUnique({ where: { id: guestId } });
  if (!guest) throw new Error('Guest not found');

  if (!guest.checkedIn) {
    await prisma.confirmation.update({
      where: { id: guestId },
      data: { checkedIn: true, checkinAt: new Date() },
    });
  }

  return guest;
}