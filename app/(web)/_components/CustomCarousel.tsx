import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const CustomCarousel = ({ data }: any) => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl">
          Our <span className="text-[#227e5f] font-semibold">Lecturers</span>
        </h2>
        <span className="italic">Meet the Lecturers of the department</span>
      </div>
      <CarouselContent>
        {data.map((data: any, index: number) => (
          <CarouselItem
            key={index}
            className="md:basis-1/2 lg:basis-1/3 rounde-lg"
          >
            <div className="p-1 rounded-lg">
              <Card className="relative bg-green-400 rounded-lg">
                <div className="w-full h-full absolute top-0 left-0 bg-black opacity-20 rounded-lg"></div>
                <Image
                  src={data?.image}
                  alt={`${data?.firstname + " image"}`}
                  className="object-cover w-full aspect-square rounded-lg"
                  width={500}
                  height={500}
                />
                <div className="absolute bottom-0 left-0 w-full p-4 text-white text-center">
                  <h2 className="text-3xl font-bold capitalize">
                    {data?.title + " " + data?.firstname + " " + data?.lastname}
                  </h2>
                </div>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
export default CustomCarousel;
