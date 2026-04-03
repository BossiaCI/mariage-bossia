import prisma from '@/lib/prisma';
import RSVPTable from '../../../../components/rsvp/RSVPTable';
import RSVPStats from '../../../../components/rsvp/RSVPStats';

import { getRSVPs } from '@/app/actions/rsvp';

export default async function RSVPListPage({ searchParams }: any) {
  // Await searchParams because it's now a promise
  const params = await searchParams;
  const page = Number(params.page || 1);
  const pageSize = 10;

  // Fetch paginated data
  const [data, total] = await Promise.all([
    getRSVPs({ page, pageSize }),
    getRSVPs({ countOnly: true })
  ]);

  const totalCount = Number(total ?? 0);
  const totalPages = Math.ceil(totalCount / pageSize);

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold">RSVP Dashboard</h1>
      <RSVPStats data={data} />
       <RSVPTable data={data} totalPages={totalPages} />
    </div>
  );
}