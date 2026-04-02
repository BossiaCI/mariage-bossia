'use client';

import { deleteConfirmation } from '@/app/actions/rsvp';

export default function RSVPRow({ data }: any) {
  return (
    <tr className="border-t">
      <td className="p-2">
        {data.firstName} {data.lastName}
      </td>

      <td>
        {data.attendance ? '✅ Yes' : '❌ No'}
      </td>

      <td>{data.guests}</td>
      <td>{data.email || '-'}</td>

      <td>
        <button
          onClick={() => deleteConfirmation(data.id)}
          className="text-red-500"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}