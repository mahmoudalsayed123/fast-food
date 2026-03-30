import MainHeading from '@/components/MainHeading';
import Image from 'next/image';
import Link from 'next/link';

const TrackingOrderById = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  return (
    <section className="mt-[67px] p-[30px] ">
      {/* Heading */}
      <div className=" mb-5 text-center">
        <h1 className="text-[35px] sm:text-[48px] font-bold text-center">
          ORDER{' '}
          <span className="ms-2 text-transparent bg-clip-text bg-linear-to-br from-primary via-primary to-accent">
            TRACKING
          </span>
        </h1>
        <p className="text-center text-[#8e99a9] mb-[30px]">
          Real-time updates on your food delivery
        </p>
      </div>

      {/* Order Tracking */}
      <div className="sm:max-w-[650px] mx-auto bg-[#151515] p-5 rounded-lg border border-[#333] mb-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-center sm:text-start text-[28px] font-semibold mb-2">
              ORDER <span className="text-primary font-bold">{id}</span>
            </h2>
            <p className="text-center sm:text-start text-[14px] text-[#8e99a9]">
              123 Main St, Anytown, USA
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/assets/icons/clock.svg"
              alt="clock"
              width={50}
              height={50}
              className="mb-2"
            />
            <p className="text-[28px] font-semibold text-primary">16 mins</p>
          </div>
        </div>
        <hr className="border border-[#333] my-7" />

        {/* Order Status */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-3 gap-8">
          <div>
            <div className="w-[100px] sm:w-full h-2 rounded-md bg-primary mb-3"></div>
            <p className="text-[14px] text-[#8e99a9]">Order Confirmed</p>
          </div>
          <div>
            <div className="w-[100px] sm:w-full h-2 rounded-md bg-primary mb-3"></div>
            <p className="text-[14px] text-[#8e99a9]">Preparing</p>
          </div>
          <div>
            <div className="w-[100px] sm:w-full h-2 rounded-md bg-primary mb-3"></div>
            <p className="text-[14px] text-[#8e99a9]">Delivery</p>
          </div>
          <div>
            <div className="w-[100px] sm:w-full h-2 rounded-md bg-primary mb-3"></div>
            <p className="text-[14px] text-[#8e99a9]">Delivered</p>
          </div>
        </div>
        <hr className="border border-[#333] my-7" />
        <div>
          <h3 className="text-[20px] font-semibold mb-5">Order Details</h3>
          <div className="flex items-center justify-between mb-6 text-[14px] text-[#8e99a9]">
            <span>1x Premium Pizza Slice</span>
            <span className="text-primary font-semibold">$12.99</span>
          </div>
          <div className="flex items-center justify-between mb-6 text-[14px] text-[#8e99a9]">
            <span>1x Premium Pizza Slice</span>
            <span className="text-primary font-semibold">$12.99</span>
          </div>
          <div className="flex items-center justify-between mb-6 text-[14px] text-[#8e99a9]">
            <span>1x Premium Pizza Slice</span>
            <span className="text-primary font-semibold">$12.99</span>
          </div>
        </div>
      </div>

      <div className="sm:max-w-[650px] mx-auto col-span-6 row-span-3 lg:col-span-2 lg:row-span-4 bg-primary/10 p-5 mb-[40px] rounded-lg border border-[#333]">
        <h3 className="flex items-center gap-2 mb-5 text-[20px] font-semibold">
          <Image
            src="/assets/icons/user.svg"
            alt="user"
            width={25}
            height={25}
          />
          Your Driver
        </h3>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-3 gap-8">
          <div className="mb-4">
            <p className="text-[14px] text-[#8e99a9]">Name</p>
            <p className="text-[18px] font-semibold">Jonas</p>
          </div>
          <div className="mb-4">
            <p className="text-[14px] text-[#8e99a9]">Rating</p>
            <p className="text-[18px] font-semibold flex items-center gap-1">
              <Image
                src="/assets/icons/star-red.svg"
                alt="star-red"
                width={23}
                height={23}
              />
              4.9
            </p>
          </div>
          <div className="mb-4">
            <p className="text-[14px] text-[#8e99a9]">Contact</p>
            <p className="text-[18px] font-semibold flex items-center gap-1">
              <Image
                src="/assets/icons/contact.svg"
                alt="contact"
                width={23}
                height={23}
              />
              +234 800 000 0000
            </p>
          </div>
        </div>
      </div>
      <Link href="/tracking_order">
        <button className="sm:max-w-[650px] mx-auto button-primary w-full mt-5 px-4 py-3 rounded-md font-bold cursor-pointer text-[18px] flex items-center justify-center gap-2 text-white hover:scale-105 transition-all mb-5">
          Track Another Order
          <Image
            src="/assets/icons/move-right.svg"
            alt="move-right"
            width={25}
            height={25}
            className="fill-white"
          />
        </button>
      </Link>
    </section>
  );
};

export default TrackingOrderById;
