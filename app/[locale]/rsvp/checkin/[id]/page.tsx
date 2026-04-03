import { markCheckedIn } from '@/app/actions/checkin';
import prisma from '@/lib/prisma';

interface PageProps { params: { id: number } }

export default async function CheckinPage({ params }: PageProps) {
  const guestId = params.id;
  const guest = await prisma.confirmation.findUnique({ where: { id: guestId } });

  if (!guest) return <p>Guest not found</p>;

  if (!guest.checkedIn) {
    await markCheckedIn(guestId);
  }

  return (
    <div className="p-8 max-w-md mx-auto text-center">
      <h1 className="text-2xl font-bold mb-4">{guest.firstName} {guest.lastName}</h1>
      <p>{guest.checkedIn ? '✅ Already checked in' : '🎉 Successfully checked in!'}</p>
    </div>
  );
}