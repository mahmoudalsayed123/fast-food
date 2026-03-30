import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Image from 'next/image';
import { Button } from './ui/button';
import { useDispatch, useSelector } from 'react-redux';
import {
  decreaseQuantity,
  removeFromCart,
  updateQuantity,
} from '@/app/store/slices/cartSlice';
import Link from 'next/link';
import { useState } from 'react';

const CartSheet = () => {
  const [open, setOpen] = useState(false);
  const cart = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();
  const subtotal = cart.items.reduce(
    (acc: number, item: any) => acc + item.price * item.quantity,
    0,
  );
  const tax = subtotal * 0.1;
  const delivery = subtotal * 0.1;
  const total = subtotal + tax + delivery;
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <div onClick={() => setOpen(true)} className="relative">
          <Image
            src="/assets/icons/cart.svg"
            alt="cart"
            width={45}
            height={45}
            className="cursor-pointer"
          />
          {cart.items.length > 0 && (
            <span className="absolute top-[-2px] right-0 bg-primary text-white text-xs px-2 py-1 rounded-full">
              {cart.items.length}
            </span>
          )}
        </div>
      </SheetTrigger>

      <SheetContent className="bg-background border-none w-[330px] sm:w-[500px] text-foreground ">
        <SheetHeader className="border-b border-gray-800">
          <SheetTitle className="p-6">
            <h1 className="text-subheading">Your Cart</h1>
          </SheetTitle>
        </SheetHeader>

        {cart.items.length === 0 ? (
          <div className="flex flex-col  flex-1 items-center justify-center gap-4">
            <Image
              src="/assets/icons/cart-fill.svg"
              alt="cart"
              width={50}
              height={50}
            />
            <p>Your cart is empty</p>
            <Link href="/menu">
              <Button
                onClick={() => setOpen(false)}
                className="button-primary transition-all cursor-pointer"
              >
                Start Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <div className="flex flex-col flex-1 gap-4 p-4 pb-[200px]  overflow-y-scroll">
            {cart.items.map((item: any) => (
              <div key={item.id} className="flex items-center gap-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded-lg"
                />
                <div className="flex flex-col flex-1 gap-4">
                  <div className="flex items-center justify-between gap-1">
                    <p className="text-[14px] font-semibold ">{item.name}</p>
                    <p className="text-[14px] font-semibold ">{item.price}$</p>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 border border-gray-800 rounded-full">
                      <button
                        onClick={() =>
                          dispatch(decreaseQuantity({ id: item.id }))
                        }
                      >
                        <Image
                          src="/assets/icons/minus.svg"
                          alt="minus"
                          width={25}
                          height={25}
                        />
                      </button>
                      <p>{item.quantity}</p>
                      <button
                        onClick={() =>
                          dispatch(updateQuantity({ id: item.id }))
                        }
                      >
                        <Image
                          src="/assets/icons/plus.svg"
                          alt="plus"
                          width={25}
                          height={25}
                        />
                      </button>
                    </div>
                    <button onClick={() => dispatch(removeFromCart(item.id))}>
                      <Image
                        src="/assets/icons/trash.svg"
                        alt="trash"
                        width={25}
                        height={25}
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
            {cart.items.length > 0 && (
              <div className="absolute bottom-0 left-0 w-full bg-[#151515] p-4  pb-6">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[#8e99a9] text-[14px]">Subtotal</p>
                  <p className="text-[#8e99a9] text-[14px]">{subtotal}$</p>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[#8e99a9] text-[14px]">Tax</p>
                  <p className="text-[#8e99a9] text-[14px]">{tax}$</p>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[#8e99a9] text-[14px]">Total</p>
                  <p className="text-[#8e99a9] text-[14px]">{total}$</p>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[#8e99a9] text-[14px]">Delivery</p>
                  <p className="text-[#8e99a9] text-[14px]">{delivery}$</p>
                </div>
                <Link onClick={() => setOpen(false)} href="/checkout">
                  <button className="button-primary w-full mt-5 px-4 py-2 rounded-md text-semibold cursor-pointer border border-white text-[18px] flex items-center justify-center gap-2 text-white">
                    <span>Checkout</span>
                    <Image
                      src="/assets/icons/move-right.svg"
                      alt="move-right"
                      width={25}
                      height={25}
                      className="fill-white"
                    />
                  </button>
                </Link>
              </div>
            )}
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
