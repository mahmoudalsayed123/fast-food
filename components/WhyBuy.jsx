import Image from "next/image";
import React from "react";

const WhyBuy = () => {
  return (
    <section className="pt-[100px] p-[20px] flex flex-col md:flex-row gap-[50px] md:gap-[10px] lg:gap-[50px] items-center md:justify-between lg:justify-center">
      <div className="flex flex-col items-center text-center gap-[25px]">
        <div className="bg-[#1a1a1a] w-fit px-5 py-4 rounded-lg cursor-pointer hover:bg-primary/20 hover:scale-110 transition-all">
          <Image
            src="/assets/icons/flame.svg"
            alt="flame"
            width={50}
            height={50}
          />
        </div>
        <div>
          <h2 className="text-[20px] font-semibold mb-2">Freshly Grilled</h2>
          <p className="text-muted-foreground w-[300px] md:w-[220px] lg:w-[300px]">
            Never frozen patties, grilled to perfection upon order.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center text-center gap-[25px]">
        <div className="bg-[#1a1a1a] w-fit px-5 py-4 rounded-lg cursor-pointer hover:bg-primary/20 hover:scale-110 transition-all">
          <Image
            src="/assets/icons/clock.svg"
            alt="flame"
            width={50}
            height={50}
          />
        </div>
        <div>
          <h2 className="text-[20px] font-semibold mb-2">Freshly Grilled</h2>
          <p className="text-muted-foreground w-[300px] md:w-[220px] lg:w-[300px]">
            Never frozen patties, grilled to perfection upon order.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center text-center gap-[25px]">
        <div className="bg-[#1a1a1a] w-fit px-5 py-4 rounded-lg cursor-pointer hover:bg-primary/20 hover:scale-110 transition-all">
          <Image
            src="/assets/icons/award.svg"
            alt="flame"
            width={50}
            height={50}
          />
        </div>
        <div>
          <h2 className="text-[20px] font-semibold mb-2">Freshly Grilled</h2>
          <p className="text-muted-foreground w-[300px] md:w-[220px] lg:w-[300px]">
            Never frozen patties, grilled to perfection upon order.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyBuy;
