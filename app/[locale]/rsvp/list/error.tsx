'use client';

export default function Error({ error }: any) {
  return (
    <div className="p-8 text-red-500">
      Error loading RSVPs: {error.message}
    </div>
  );
}