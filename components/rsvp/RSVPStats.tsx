export default function RSVPStats({ data }: any) {
  const total = data.length;
  const attending = data.filter((c: any) => c.attendance).length;
  const guests = data.reduce((sum: number, c: any) => sum + c.guests, 0);

  return (
    <div className="flex gap-6">
      <div>Total: {total}</div>
      <div>Attending: {attending}</div>
      <div>Guests: {guests}</div>
    </div>
  );
}