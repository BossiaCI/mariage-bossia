'use client';

import { useState } from 'react';
import RSVPRow from './RSVPRow';
import { exportToExcel, exportToCSV } from '../../app/actions/export';
import Link from 'next/link';
import { updateConfirmation } from '@/app/actions/rsvp';

export default function RSVPTable({ data, totalPages }: any) {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'all' | 'yes' | 'no'>('all');

  const filtered = data
    .filter((c: any) => {
      if (filter === 'yes') return c.attendance;
      if (filter === 'no') return !c.attendance;
      return true;
    })
    .filter((c: any) =>
      `${c.firstName} ${c.lastName}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center gap-4 flex-wrap">
        <input
          placeholder="Search guest..."
          className="border rounded-lg px-3 py-2 w-64"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="flex gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg border transition-colors ${
                filter === 'all'
                  ? 'bg-accent text-white border-accent'
                  : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
              }`}
            >
              All
            </button>

            <button
              onClick={() => setFilter('yes')}
              className={`px-4 py-2 rounded-lg border transition-colors ${
                filter === 'yes'
                  ? 'bg-green-500 text-white border-green-500'
                  : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
              }`}
            >
              Attending
            </button>

            <button
              onClick={() => setFilter('no')}
              className={`px-4 py-2 rounded-lg border transition-colors ${
                filter === 'no'
                  ? 'bg-red-500 text-white border-red-500'
                  : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
              }`}
            >
              Declined
            </button>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => exportToCSV(filtered)}
            className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"
          >
            Export CSV
          </button>
          <button
            onClick={() => exportToExcel(filtered)}
            className="bg-black text-white px-4 py-2 rounded-lg hover:opacity-80"
          >
            Export Excel
          </button>
        </div>
      </div>

      {/* Desktop Table */}
        <div className="hidden md:block rounded-xl border overflow-hidden shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="p-3 text-left">Guest</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Guests</th>
                <th className="p-3 text-left">Accompanying</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Dietary</th>
                <th className="p-3 text-left">Message</th>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Check-In</th>
                <th className="p-3"></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((c: any) => (
                <RSVPRow key={c.id} data={c} />
              ))}
            </tbody>
          </table>
        </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {filtered.map((c: any) => (
          <div key={c.id} className="p-4 border rounded-xl shadow-sm space-y-2">
            <div className="font-bold">{c.firstName} {c.lastName}</div>
            <div>{c.attendance ? '✅ Attending' : '❌ No'}</div>
            <div>Guests: {c.guests}</div>
            {c.accompanyingGuests && (
              <div>Accompanying: {c.accompanyingGuests}</div>
            )}
            <div>Email: {c.email || '-'}</div>
            <div>
              Check-In: {c.checkedIn ? '✅ Yes' : (
                <button
                  onClick={async () => {
                    await updateConfirmation(c.id, { checkedIn: true });
                    c.checkedIn = true; // update state for UI
                  }}
                  className="px-2 py-1 text-xs bg-blue-100 rounded hover:bg-blue-200"
                >
                  Check-In
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex gap-2 mt-4">
        {Array.from({ length: totalPages }).map((_, i) => (
          <Link key={i} href={`?page=${i + 1}`}>
            <button className="px-3 py-1 border rounded">{i + 1}</button>
          </Link>
        ))}
      </div>
    </div>
  );
}