import prisma from '@/lib/prisma';
import RSVPTable from '../../../../components/rsvp/RSVPTable';
import RSVPStats from '../../../../components/rsvp/RSVPStats';

export default async function RSVPListPage() {
  const confirmations = await prisma.confirmation.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold">RSVP Dashboard</h1>

      <RSVPStats data={confirmations} />
      <RSVPTable data={confirmations} />
    </div>
  );
}