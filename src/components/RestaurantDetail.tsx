import { Badge } from "./ui/badge";
import { Timer } from "lucide-react";
import HeroImage from "../assets/vegetable-cutlets-vegetarian-cutlets_75924-18446.avif";
import AvailableMenu from "./AvailbleMenu";

const RestaurantDetail = () => {
  return (
    <div className="max-w-6xl mx-auto my-10">
      <div className="w-full">
        <div className="relative w-full h-32 md:h-64 lg:h-72">
          <img
            src={HeroImage}
            alt=""
            className="object-cover w-full h-full rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="my-5">
            <h1 className="font-medium text-xl">Tandoori Tadka</h1>
            <div className="flex gap-2 my-2">
              {["Biryani", "Momos"].map((_, idx: number) => (
                <Badge key={idx}></Badge>
              ))}
            </div>
            <div className="flex md:flex-row flex-col gap-2 my-5">
              <div className="flex items-center gap-2">
                <Timer className="w-5 h-5" />
                <h1 className="flex items-center gap-2 font-medium">
                  Delivery Time:{" "}
                  <span className="text-[#D19254]">Delivery Time:</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <AvailableMenu />
      </div>
    </div>
  );
};

export default RestaurantDetail;
