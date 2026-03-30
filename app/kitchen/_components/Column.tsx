'use client';

import Image from 'next/image';
import { Order } from '../page';
import OrderCard from './OrderCard';
import { useState } from 'react';

export default function Column({
  orders,
  status,
  title,
  background,
  text,
}: {
  orders: Order[];
  title: string;
  status: string;
  background: string;
  text: string;
}) {
  const [isExpanded, setIsExpanded] = useState(true);
  const filtered = orders.filter((order) => order.status === status);

  return (
    <div className="space-y-3 max-h-[70vh] overflow-y-auto pr-2">
      <h2
        className={`flex items-center justify-center gap-2 p-3 rounded-lg border text-center font-bold ${background} ${text} border-blue-500/50 mb-8`}
      >
        {title}
        <div onClick={() => setIsExpanded((e) => !e)}>
          <Image
            src="/assets/icons/arrow_down.svg"
            alt="arrow_down"
            width={20}
            height={20}
            className="w-5 h-5 cursor-pointer"
          />
        </div>
      </h2>

      {isExpanded && (
        <div className="space-y-3">
          {filtered.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      )}
    </div>
  );
}
