import prisma from '@/lib/prisma';
import RSVPTable from '../../../../components/rsvp/RSVPTable';
import RSVPStats from '../../../../components/rsvp/RSVPStats';

export default async function RSVPListPage({ searchParams }: any) {
  const page = Number(searchParams.page || 1);
  const pageSize = 10;

  const [data, total] = await Promise.all([
    prisma.confirmation.findMany({
      skip: (page - 1) * pageSize,
      take: pageSize,
      orderBy: { createdAt: 'desc' },
    }),
    prisma.confirmation.count(),
  ]);

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold">RSVP Dashboard</h1>
      <RSVPStats data={data} />
      <RSVPTable data={data} totalPages={Math.ceil(total / pageSize)} />
    </div>
  );
}