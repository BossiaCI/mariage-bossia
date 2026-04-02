import RSVPRow from './RSVPRow';



export default function RSVPTable({ data }: any) {

    
  return (
    <table className="w-full border">
      <thead>
        <tr className="bg-gray-100">
          <th>Name</th>
          <th>Status</th>
          <th>Guests</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {data.map((c: any) => (
          <RSVPRow key={c.id} data={c} />
        ))}
      </tbody>
    </table>
  );
}