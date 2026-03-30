'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { clearCart } from '../store/slices/cartSlice';
import { formateCurrency, timeAgo } from '@/lib/help';

export default function CheckoutPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    address: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const items = useSelector((state: RootState) => state.cart.items);

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (!form.fullName || !form.phone || !form.address) {
      alert('Please fill all the fields');
      return;
    }
    setLoading(true);

    setTimeout(() => {
      const order = {
        id: Date.now().toString(),
        customer: form,
        items,
        total,
        status: 'received',
        createdAt: timeAgo(new Date().toISOString()),
      };

      const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]');

      existingOrders.push(order);
      console.log(existingOrders);

      localStorage.setItem('orders', JSON.stringify(existingOrders));

      dispatch(clearCart());

      setLoading(false);
      setSuccess(true);

      setTimeout(() => {
        router.push(`/tracking/${order.id}`);
      }, 1500);
    }, 1500);
  };
  return (
    <section className="mt-[67px] p-[30px] ">
      <h1 className="text-[36px] font-semibold sm:text-display text-center mb-[30px]">
        Checkout
      </h1>
      {/* Delivery & Payment & Order Summary */}
      <div className="grid grid-cols-6 grid-rows-6 gap-4">
        {/* Delivery & Payment */}
        <div className="col-span-6 row-span-6 lg:col-span-4 lg:row-span-6">
          <div className="col-span-6 row-span-3 lg:col-span-4 lg:row-span-3 bg-[#151515] p-5 rounded-lg border border-[#333] transition-all hover:border-primary mb-[30px]">
            <h4 className="flex items-center gap-2 mb-[20px]">
              <Image
                src="/assets/icons/map.svg"
                alt="map"
                width={25}
                height={25}
              />
              <span className="text-[20px] font-semibold">
                Delivery Address
              </span>
            </h4>
            <form
              className="flex flex-col gap-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                className="outline-none bg-[#1a1a1a] px-4 py-2 rounded-lg border border-[#333] transition-all focus:border-primary text-[#8e99a9]"
                value={form.fullName}
                onChange={handleChange}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="outline-none bg-[#1a1a1a] px-4 py-2 rounded-lg border border-[#333] transition-all focus:border-primary text-[#8e99a9]"
                value={form.phone}
                onChange={handleChange}
              />
              <input
                type="text"
                name="address"
                placeholder="Your Address"
                className="outline-none bg-[#1a1a1a] px-4 py-2 rounded-lg border border-[#333] transition-all focus:border-primary text-[#8e99a9]"
                value={form.address}
                onChange={handleChange}
              />
            </form>
          </div>

          <button
            className="button-primary w-full mt-5 px-4 py-3 rounded-md font-bold cursor-pointer text-[18px] flex items-center justify-center gap-2 text-white hover:scale-105 transition-all mb-5"
            onClick={handleSubmit}
          >
            {loading ? '...Processing' : 'Pay 33.43$'}
            <Image
              src="/assets/icons/move-right.svg"
              alt="move-right"
              width={25}
              height={25}
              className="fill-white"
            />
          </button>
        </div>
        {/* Order Summary */}
        <div className="col-span-6 row-span-3 lg:col-span-2 lg:row-span-4 bg-[#151515] p-5 rounded-lg border border-[#333] transition-all hover:border-primary sticky top-[70px]">
          <h4 className="text-[20px] font-semibold mb-[20px]">Order summary</h4>
          <div className="flex items-center justify-between mb-4 text-[14px] text-[#8e99a9]">
            <span>1x Premium Pizza Slice</span>
            <span>$12.99</span>
          </div>
          <div className="flex items-center justify-between mb-4 text-[14px] text-[#8e99a9]">
            <span>2x Crispy Chicken Wrap</span>
            <span>$32.00</span>
          </div>
          <hr className="border-[#333]" />
          <div className="flex items-center justify-between mb-4 mt-4 text-[14px] text-[#8e99a9]">
            <span>Subtotal</span>
            <span>$44.99</span>
          </div>
          <div className="flex items-center justify-between mb-4 text-[14px] text-[#8e99a9]">
            <span>Tax</span>
            <span>$4.50</span>
          </div>
          <div className="flex items-center justify-between mb-4 text-[14px] text-[#8e99a9]">
            <span>Delivery</span>
            <span>$2.00</span>
          </div>
          <hr className="border-[#333]" />
          <div className="flex items-center justify-between mt-4">
            <span className="text-[20px] font-semibold">Total</span>
            <span className="text-[20px] font-semibold text-primary">
              {formateCurrency(total)}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
