'use client';

import { formateCurrency } from '@/lib/help';
import { Order } from '../page';
import Image from 'next/image';

export default function OrderCard({ order }: { order: Order }) {
  return (
    <div className="px-2 py-3 w-full bg-[#1a1a1a] rounded-lg transition-all border border-[#333] hover:border-primary relative group">
      <div className="flex flex-col lg:flex-row flex-wrap justify-between gap-2 mb-3">
        <h3 className="group-hover:text-primary font-bold text-[14px] lg:text-[18px]">
          #{order.id}
        </h3>
        <span className="text-[14px] text-muted-foreground mb-3">
          {order.createdAt}
        </span>
      </div>
      <div>
        <p className="text-[18px] font-semibold text-muted-foreground mb-3">
          {order.customer.fullName}
        </p>
        <p className="text-[18px] font-semibold text-muted-foreground mb-3">
          {order.customer.phone}
        </p>
      </div>
      <p className="text-[20px] mb-3 font-bold text-primary">
        {formateCurrency(order.total)}
      </p>
      <button className="button-primary w-full mt-3 px-2 py-1 rounded-md font-bold cursor-pointer text-[18px] flex items-center justify-center gap-2 text-white hover:scale-105 transition-all">
        <span>Next</span>
        <Image
          src="/assets/icons/move-right.svg"
          alt="move-right"
          width={20}
          height={20}
        />
      </button>
    </div>
  );
}
