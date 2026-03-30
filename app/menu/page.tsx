import MainHeading from '@/components/MainHeading';
import { itemMenu } from '../_constant';
import ItemCard from '@/components/ItemCard';

const Menu = () => {
  return (
    <section className="mt-[100px] p-[30px]">
      {/* Heading, Search and Filter */}
      <div>
        <MainHeading
          h1="Our"
          h2="Menu"
          size="display"
          description="Order now. Skip the line. Taste the future."
        />

        {/* Search and Filter */}
        {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-[30px]">
          <input
            type="text"
            placeholder="Search"
            className="w-full sm:w-[50%] md:w-[90%] border border-gray-700 outline-none rounded-md px-5 py-3  bg-slate-900/50 placeholder:text-muted-foreground"
          />
        </div> */}
      </div>

      {/* Item Menu */}
      <div className="mt-[50px] flex flex-wrap items-center justify-center md:justify-start gap-6">
        {itemMenu.map((item) => (
          <button
            className="flex items-center justify-center font-semibold px-5 py-3 border border-gray-700 rounded-full cursor-pointer bg-[#1a1a1a] hover:bg-primary/80 hover:scale-110 transition-all duration-300 ease-in-out"
            key={item.id}
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* Item Card */}
      <div className="mt-[40px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
    </section>
  );
};

export default Menu;
