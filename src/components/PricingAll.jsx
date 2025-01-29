import OfficePrice from "../pages/OfficePrice";
import PriceGeneral from "../pages/PriceGeneral";
import PriceMaintenance from "../pages/PriceMaintainance";
import PricePackages from "../pages/PricePackages";

export const PricingAll = () => {
  return (
    <>
      <div className="items-center text-center">
        <p className="text-start px-3 text-2xl md:text-4xl font-bold text-black mt-5 pb-5">
          Need a quick electrical check? Get a professional electrician at your
          doorstep for a single visit within 5-10 km. Fast, reliable, and
          affordable service at <span className="text-green-600 animate-ping">Rs.99</span>
        </p>
        <a href="https://wa.me/917620162336" target="_blank">
        <button className="bg-rose-600 h-10 rounded-lg border-r-2 font-bold text-white w-1/2 animate-pulse">
       
  Book Now
</button>
</a>

      </div>
      <PricePackages />
      <OfficePrice />
      <PriceMaintenance />
      <PriceGeneral />
    </>
  );
};
