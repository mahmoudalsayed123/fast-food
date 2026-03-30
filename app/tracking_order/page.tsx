'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const TrackingOrderPage = () => {
  const [orderId, setOrderId] = useState('');
  const router = useRouter();

  const handleTrack = () => {
    if (!orderId) return;
    router.push(`/tracking/${orderId}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Track Your Order</h1>

      <input
        placeholder="Enter Order ID"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
        className="p-3 w-[300px] bg-card border rounded mb-4"
      />

      <button
        onClick={handleTrack}
        className="bg-primary px-6 py-3 rounded text-white"
      >
        Track Order
      </button>
    </div>
  );
};

export default TrackingOrderPage;
