export default function RSVPStats({ data }: any) {
  const total = data.length;
  const attending = data.filter((c: any) => c.attendance).length;
  const guests = data.reduce((sum: number, c: any) => sum + c.guests, 0);

  return (
    <div className="grid grid-cols-3 gap-4">
      <Card title="Total RSVPs" value={total} />
      <Card title="Attending" value={attending} />
      <Card title="Guests" value={guests} />
    </div>
  );
}

function Card({ title, value }: any) {
  return (
    <div className="p-4 rounded-xl border bg-white shadow-sm">
      <div className="text-gray-500 text-sm">{title}</div>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  );
}