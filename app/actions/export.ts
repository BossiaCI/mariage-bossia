import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

type RSVP = {
  firstName: string;
  lastName: string;
  email?: string | null;
  attendance: boolean;
  guests: number;
  accompanyingGuests?: string | null;
  dietary?: string | null;
  message?: string | null;
  createdAt: string | Date;
};

// ✅ Format data consistently
function formatData(data: RSVP[]) {
  return data.map((c) => ({
    FirstName: c.firstName,
    LastName: c.lastName,
    Email: c.email || '',
    Attendance: c.attendance ? 'Yes' : 'No',
    Guests: c.guests,
    Accompanying: c.accompanyingGuests || '',
    Dietary: c.dietary || '',
    Message: c.message || '',
    Date: new Date(c.createdAt).toLocaleDateString(),
  }));
}

// ✅ Escape CSV values (critical fix)
function escapeCSV(value: any) {
  if (value == null) return '';
  const str = value.toString();

  if (str.includes(',') || str.includes('"') || str.includes('\n')) {
    return `"${str.replace(/"/g, '""')}"`;
  }

  return str;
}

// ✅ CSV Export (safe)
export function exportToCSV(data: RSVP[]) {
  if (!data.length) {
    alert('No data to export');
    return;
  }

  const rows = formatData(data);
  const headers = Object.keys(rows[0]);

  const csv =
    headers.join(',') +
    '\n' +
    rows
      .map((row) =>
        headers.map((h) => escapeCSV(row[h as keyof typeof row])).join(',')
      )
      .join('\n');

  const blob = new Blob([csv], {
    type: 'text/csv;charset=utf-8;',
  });

  saveAs(blob, 'rsvp.csv');
}

// ✅ Excel Export (with formatting)
export function exportToExcel(data: RSVP[]) {
  if (!data.length) {
    alert('No data to export');
    return;
  }

  const rows = formatData(data);

  const worksheet = XLSX.utils.json_to_sheet(rows);

  // ✅ Auto column width
  const colWidths = Object.keys(rows[0]).map((key) => ({
    wch: Math.max(
      key.length,
      ...rows.map((row) => String(row[key as keyof typeof row]).length)
    ),
  }));

  worksheet['!cols'] = colWidths;

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'RSVP');

  const excelBuffer = XLSX.write(workbook, {
    bookType: 'xlsx',
    type: 'array',
  });

  const blob = new Blob([excelBuffer], {
    type:
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  });

  saveAs(blob, 'rsvp.xlsx');
}