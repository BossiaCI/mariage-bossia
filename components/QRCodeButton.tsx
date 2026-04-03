'use client';
import { useState } from 'react';
import { generateQRCodeForGuest } from '@/app/actions/checkin';

export default function QRCodeButton({ guestId }: { guestId: number }) {
  const [qr, setQr] = useState<string | null>(null);

  const handleGenerate = async () => {
    const qrData = await generateQRCodeForGuest(guestId);
    setQr(qrData);
  };

  return (
    <div>
      <button onClick={handleGenerate} className="bg-blue-500 text-white px-3 py-1 rounded">
        Show QR
      </button>
      {qr && <img src={qr} alt="QR Code" className="mt-2 w-32 h-32" />}
    </div>
  );
}