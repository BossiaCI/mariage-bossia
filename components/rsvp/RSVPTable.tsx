'use client';

import { useState, useMemo } from 'react';
import RSVPRow from './RSVPRow';
import { exportToExcel, exportToCSV } from '../../app/actions/export'; // Assume these functions are defined to handle exports
import Link from 'next/link';

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

export default function RSVPTable({
  data,
  totalPages
}: {
  data: RSVP[];
  totalPages: number;
}) {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'all' | 'yes' | 'no'>('all');

  // ✅ Optimized filtering
  const filtered = useMemo(() => {
    return data
      .filter((c) => {
        if (filter === 'yes') return c.attendance;
        if (filter === 'no') return !c.attendance;
        return true;
      })
      .filter((c) =>
        `${c.firstName} ${c.lastName}`
          .toLowerCase()
          .includes(search.toLowerCase())
      );
  }, [data, search, filter]);

  return (
    <div className="space-y-4">

      {/* 🔍 Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        {/* Search */}
        <input
          placeholder="Search guest..."
          className="border rounded-lg px-3 py-2 w-full md:w-64"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Filters */}
        <div className="flex gap-2">
          {[
            { key: 'all', label: 'All' },
            { key: 'yes', label: 'Attending' },
            { key: 'no', label: 'Declined' }
          ].map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key as any)}
              className={`px-3 py-1 rounded-lg text-sm border ${
                filter === f.key
                  ? 'bg-black text-white'
                  : 'bg-white hover:bg-gray-100'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Export */}
        <div className="flex gap-2">
          <button
            onClick={() => exportToCSV(filtered)}
            className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 text-sm"
          >
            CSV
          </button>

          <button
            onClick={() => exportToExcel(filtered)}
            className="bg-black text-white px-4 py-2 rounded-lg hover:opacity-80 text-sm"
          >
            Excel
          </button>
        </div>
      </div>

      {/* 📊 Table */}
      <div className="hidden md:block rounded-xl border overflow-hidden shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600 sticky top-0 z-10">
            <tr>
              <th className="p-3 text-left">Guest</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Guests</th>
              <th className="p-3 text-left">Accompanying</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Dietary</th>
              <th className="p-3 text-left">Message</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3"></th>
            </tr>
          </thead>

          <tbody>
            {filtered.length > 0 ? (
              filtered.map((c) => (
                <RSVPRow key={c.id} data={c} />
              ))
            ) : (
              <tr>
                <td colSpan={9} className="text-center p-6 text-gray-400">
                  No guests found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* 📱 Mobile Cards */}
      <div className="md:hidden space-y-4">
        {filtered.length > 0 ? (
          filtered.map((c) => (
            <div
              key={c.id}
              className="p-4 border rounded-xl shadow-sm space-y-2"
            >
              <div className="font-semibold text-lg">
                {c.firstName} {c.lastName}
              </div>

              <div className="text-sm">
                {c.attendance ? '✅ Attending' : '❌ Declined'}
              </div>

              <div className="text-sm">Guests: {c.guests}</div>

              {c.accompanyingGuests && (
                <div className="text-sm">
                  + {c.accompanyingGuests}
                </div>
              )}

              <div className="text-sm text-gray-500">
                {c.email || '-'}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-400">
            No guests found
          </div>
        )}
      </div>

      {/* 📄 Pagination */}
      {totalPages > 1 && (
        <div className="flex flex-wrap gap-2 mt-4 justify-center">
          {Array.from({ length: totalPages }).map((_, i) => (
            <Link key={i} href={`?page=${i + 1}`}>
              <button className="px-3 py-1 border rounded hover:bg-gray-100">
                {i + 1}
              </button>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}