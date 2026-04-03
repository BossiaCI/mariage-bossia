import prisma from '@/lib/prisma';

interface PageProps {
  params: { id: number };
}

export default async function CheckinPage({ params }: PageProps) {
  const guest = await prisma.confirmation.findUnique({
    where: { id: params.id },
  });

  if (!guest) return <p>Guest not found</p>;

  const alreadyCheckedIn = guest.checkedIn;

  // Update check-in if not yet
  if (!alreadyCheckedIn) {
    await prisma.confirmation.update({
      where: { id: guest.id },
      data: { checkedIn: true, checkinAt: new Date() },
    });
  }

  return (
    <div className="p-8 max-w-md mx-auto text-center">
      <h1 className="text-2xl font-bold mb-4">
        {guest.firstName} {guest.lastName}
      </h1>
      <p>{alreadyCheckedIn ? '✅ Already checked in' : '🎉 Successfully checked in!'}</p>
    </div>
  );
}