import prisma from '@/lib/prisma';

export default async function CheckIn({ params }: any) {
  await prisma.confirmation.update({
    where: { id: params.id },
    data: { checkedIn: true },
  });

  return <div>Guest checked in ✅</div>;
}