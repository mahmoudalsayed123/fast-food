// item = {
//     id: 1,
//     name: Classic Cheeseburger,
//     category: combos,
//     description:  A juicy 100% beef patty with melted cheddar,
//                     crisp lettuce, tomato,
//                      and our signature sauce.,
//     rating: 3.5,
//     price: 8.45 $,
//     bestSeller : true,
//     reviews: 409
// }

"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const ItemCard = () => {
  return (
    <div className="bg-[#333]  rounded-lg overflow-hidden relative">
      <div className="overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="relative overflow-hidden max-h-[230px]"
        >
          <Image
            src="/assets/icons/item_1.avif"
            alt="burger"
            width={200}
            height={200}
            className="w-full mb-5 rounded-t-lg"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/20  blur-sm"></div>
        </motion.div>
      </div>
      <div className="p-3 group-hover:bg-primary transition-all duration-300 ">
        <div className="flex flex-col gap-2 mb-3">
          <h4 className="text-[20px] font-semibold group">
            Classic Cheeseburger
          </h4>
          <p className="text-muted-foreground font-medium text-[14px]">
            A juicy 100% beef patty with melted cheddar, crisp lettuce, tomato,
            and our signature sauce.
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-start">
            <p className="text-muted-foreground text-[14px]">Price</p>
            <p className="text-primary text-[20px] font-bold">8.45 $</p>
          </div>
          <div className="bg-white rounded-lg p-2 cursor-pointer transition-all duration-300 hover:bg-primary">
            <Image
              src="/assets/icons/plus.svg"
              alt="plus"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[190px] right-2 flex items-center justify-center gap-1 px-2 py-1 bg-black/70 rounded-lg">
        <img
          src="/assets/icons/star.png"
          alt="star"
          width={14}
          height={14}
          className=""
        />
        <span className="text-white text-[12px] font-semibold ">409</span>
      </div>
      <div className="absolute top-3 left-3 bg-secondary px-2 py-1 rounded-full">
        <p className="text-[12px] font-bold capitalize text-black">
          BEST SELLER
        </p>
      </div>
    </div>
  );
};

export default ItemCard;
