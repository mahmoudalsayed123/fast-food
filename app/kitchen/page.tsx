'use client';

import { useEffect, useState } from 'react';
import Column from './_components/Column';
import { statusArray } from '../_constant';
import MainHeading from '@/components/MainHeading';

export type Order = {
  id: string;
  customer: {
    fullName: string;
    phone: string;
  };
  items: {
    name: string;
    quantity: number;
  }[];
  total: number;
  status: string;
  createdAt: string;
};

export default function DashboardPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [search, setSearch] = useState('');

  const filteredOrders = orders.filter((order) =>
    order.id.toString().includes(search),
  );
  useEffect(() => {
    const stored = localStorage.getItem('orders');

    if (stored) {
      setOrders(JSON.parse(stored));
    }
  }, []);

  return (
    <div className=" mt-[80px] min-h-screen bg-background p-6">
      <div className="flex flex-col lg:flex-row items-center sm:items-start gap-5 md:gap-10 mb-6">
        <div className=" flex ">
          <MainHeading
            h1="Order"
            h2="Kitchen"
            size="display"
            description="Manage Orders Dashboard"
          />
        </div>
        <div className=" flex flex-col sm:flex-row sm:w-full lg:h-[95px] items-center lg:gap-[30px] gap-[10px] sm:gap-[25px] mb-6">
          <input
            type="text"
            name="search_order"
            placeholder="Search by order id..."
            className="w-full outline-none bg-[#1a1a1a] px-4 py-2 rounded-lg border border-[#333] transition-all focus:border-primary text-[#8e99a9]"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            name="filter_order"
            id="filter_order"
            className="w-full sm:w-fit md:w-[300px] lg:w-fit outline-none bg-[#1a1a1a] px-4 py-2 rounded-lg border border-[#333] transition-all focus:border-primary text-[#8e99a9] cursor-pointer"
          >
            <option
              value="all"
              className="text-[#8e99a9] bg-[#1a1a1a] cursor-pointer hover:bg-primary"
            >
              All
            </option>
            <option
              value="pending"
              className="text-[#8e99a9] bg-[#1a1a1a] cursor-pointer hover:bg-primary"
              selected
            >
              Pending
            </option>
            <option
              value="completed"
              className="text-[#8e99a9] bg-[#1a1a1a] cursor-pointer hover:bg-primary"
            >
              Completed
            </option>
            <option
              value="cancelled"
              className="text-[#8e99a9] bg-[#1a1a1a] cursor-pointer hover:bg-primary"
            >
              Cancelled
            </option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-start">
        {statusArray.map((item) => (
          <Column
            key={item.status}
            orders={filteredOrders}
            title={item.title}
            status={item.status}
            background={item.bg}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
}
