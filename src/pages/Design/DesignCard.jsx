import { Card, CardContent } from "../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import { FaWhatsapp } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const imagePlaceholder =
  "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=";

const DesignCard = ({ item }) => {

  return (
    <>
      <Link to="/design/edit-design/1223" className="group duration-200 border rounded-xl">
        <div className="w-full flex items-center justify-center">
          <Carousel
            opts={{ loop: true }}
            className="w-full max-w-60"
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="px-2.5! pt-2.5! p-0 shadow-none">
                  <Card className="rounded-xl">
                    <CardContent className="p-0 h-48">
                      <img
                        src={imagePlaceholder}
                        alt="Design Image"
                        className="w-full h-full object-cover rounded-xl bg-cover"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="left-[38%] top-auto bottom-2 cursor-pointer hover:bg-primary hover:text-white size-6 group-hover:flex hidden duration-200" />
            <CarouselNext className="right-[38%] top-auto bottom-2 cursor-pointer hover:bg-primary hover:text-white size-6 group-hover:flex hidden duration-200" />
          </Carousel>
        </div>
        <div className="flex items-center justify-between gap-1 px-4 pb-4 pt-2">
          <div className="flex items-center gap-1">
            <h4 className="p-bold whitespace-nowrap">Design No.:</h4>
            <p className="p-regular line-clamp-1">1234679</p>
          </div>
          <div className="flex items-center justify-center size-9 bg-[#25d366] rounded-md cursor-pointer hover:bg-green/80 duration-200">
            <FaWhatsapp className="text-white size-6" />
          </div>
        </div>
      </Link>
    </>
  );
};

export default DesignCard;
