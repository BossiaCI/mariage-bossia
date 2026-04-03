'use client';

import { useState } from 'react';
import { updateConfirmation, deleteConfirmation } from '@/app/actions/rsvp';

type RSVP = {
  id: number;
  firstName: string;
  lastName: string;
  attendance: boolean;
  guests: number;
  accompanyingGuests?: string | null;
  email?: string | null;
  dietary?: string | null;
  message?: string | null;
  createdAt: string | Date;
};

export default function RSVPRow({ data }: { data: RSVP }) {
  const [editingGuests, setEditingGuests] = useState(false);
  const [guests, setGuests] = useState<number>(data.guests);
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    setLoading(true);
    await updateConfirmation(data.id, { guests });
    setEditingGuests(false);
    setLoading(false);
  };

  const handleDelete = async () => {
    if (!confirm('Delete this RSVP?')) return;
    await deleteConfirmation(data.id);
  };

  return (
    <tr className="border-t hover:bg-gray-50 transition">
      
      {/* Name */}
      <td className="p-3 font-medium">
        {data.firstName} {data.lastName}
      </td>

      {/* Status */}
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

      {/* Guests (editable) */}
      <td className="p-3">
        {editingGuests ? (
          <div className="flex items-center gap-1">
            <input
              value={guests}
              type="number"
              min={0}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="border px-2 py-1 w-16 rounded"
            />

            <button
              onClick={handleSave}
              disabled={loading}
              className="text-blue-500 text-xs"
            >
              {loading ? '...' : 'Save'}
            </button>

            <button
              onClick={() => setEditingGuests(false)}
              className="text-gray-400 text-xs"
            >
              Cancel
            </button>
          </div>
        ) : (
          <span
            onClick={() => setEditingGuests(true)}
            className="cursor-pointer hover:underline"
            title="Click to edit"
          >
            {guests}
          </span>
        )}
      </td>

      {/* Accompanying guests */}
      <td className="p-3">
        {data.accompanyingGuests ? (
          <ul className="text-sm space-y-1">
            {data.accompanyingGuests
              .split(';')
              .map((guest, i) => (
                <li key={i}>• {guest.trim()}</li>
              ))}
          </ul>
        ) : (
          <span className="text-gray-400">-</span>
        )}
      </td>

      {/* Email */}
      <td className="p-3">{data.email || '-'}</td>

      {/* Dietary */}
      <td className="p-3">{data.dietary || '-'}</td>

      {/* Message */}
      <td className="p-3 max-w-xs truncate">
        {data.message || '-'}
      </td>

      {/* Date */}
      <td className="p-3 text-gray-500">
        {new Date(data.createdAt).toLocaleDateString()}
      </td>

      {/* Actions */}
      <td className="p-3">
        <button
          onClick={handleDelete}
          className="text-red-500 hover:underline text-xs"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}