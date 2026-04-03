'use client';

import { useState } from 'react';
import { updateConfirmation, deleteConfirmation } from '@/app/actions/rsvp';

export default function RSVPRow({ data }: any) {
  const [editingGuests, setEditingGuests] = useState(false);
  const [guests, setGuests] = useState(data.guests);
  const [checkedIn, setCheckedIn] = useState(data.checkedIn); // new

  const handleCheckIn = async () => {
    try {
      await updateConfirmation(data.id, { checkedIn: true });
      setCheckedIn(true);
    } catch (err) {
      console.error('Check-in failed', err);
    }
  };

  return (
    <tr className="border-t hover:bg-gray-50 transition">
      <td className="p-3 font-medium">{data.firstName} {data.lastName}</td>
      <td className="p-3">
        <span
          className={`px-2 py-1 rounded-full text-xs ${
            data.attendance
              ? 'bg-green-100 text-green-700'
              : 'bg-red-100 text-red-600'
          }`}
        >
          {data.attendance ? 'Attending' : 'Declined'}
        </span>
      </td>
      <td className="p-3">
        {editingGuests ? (
          <>
            <input
              value={guests}
              type="number"
              onChange={(e) => setGuests(Number(e.target.value))}
              className="border px-1 w-16"
            />
            <button
              onClick={async () => {
                await updateConfirmation(data.id, { guests });
                setEditingGuests(false);
              }}
              className="ml-1 text-blue-500 text-xs"
            >
              Save
            </button>
          </>
        ) : (
          <span onClick={() => setEditingGuests(true)}>{guests}</span>
        )}
      </td>
      <td>
        {data.accompanyingGuests ? (
          <ul>
            {data.accompanyingGuests.split(';').map((guest: string, i: number) => (
              <li key={i}>{guest.trim()}</li>
            ))}
          </ul>
        ) : '-'}
      </td>
      <td className="p-3">{data.email || '-'}</td>
      <td className="p-3">{data.dietary || '-'}</td>
      <td className="p-3 max-w-xs truncate">{data.message || '-'}</td>
      <td className="p-3 text-gray-500">{new Date(data.createdAt).toLocaleDateString()}</td>
      
      {/* ✅ Check-in Column */}
      <td className="p-3">
        {checkedIn ? (
          <span className="text-green-600 font-semibold text-sm">Checked In</span>
        ) : (
          <button
            onClick={handleCheckIn}
            className="px-2 py-1 text-xs bg-blue-100 rounded hover:bg-blue-200"
          >
            Check-In
          </button>
        )}
      </td>

      <td className="p-3">
        <button
          onClick={() => deleteConfirmation(data.id)}
          className="text-red-500 hover:underline text-xs"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}