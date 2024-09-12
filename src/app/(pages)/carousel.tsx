import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const CarouselComponent = () => {
  return (
    <>
      <h2 className="font-secondFamily font-bold text-7xl my-5">Carousels</h2>
      <div className="my-5">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <img
                className="w-full h-[400px] rounded-2xl"
                src="https://olcha.uz/image/original/sliders/ru/cdn_1/2024-07-02/V93XmQz6ogMIJMPe7ryY3edqaQLa8A8lu5Q1aDk28VgP8NLxkRuzAlZjupCN.jpg"
                alt="bannerImg"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                className="w-full h-[400px] rounded-2xl"
                src="https://olcha.uz/image/original/sliders/ru/cdn_1/2024-07-02/V93XmQz6ogMIJMPe7ryY3edqaQLa8A8lu5Q1aDk28VgP8NLxkRuzAlZjupCN.jpg"
                alt="bannerImg"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                className="w-full h-[400px] rounded-2xl"
                src="https://olcha.uz/image/original/sliders/ru/cdn_1/2024-07-02/V93XmQz6ogMIJMPe7ryY3edqaQLa8A8lu5Q1aDk28VgP8NLxkRuzAlZjupCN.jpg"
                alt="bannerImg"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      {/* second */}
      <div className="my-10">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            <CarouselItem className="basis-1/3">
              <img
                className="w-[300px] h-auto rounded-2xl"
                src="https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/B1NA6mAiwsmrVapt6VbrdvPPIllRV2EnjtNEuUvSPhHoZ2beOWGv616dhaKj.png"
                alt="bannerImg"
              />
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <img
                className="w-[300px] h-auto rounded-2xl"
                src="https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/B1NA6mAiwsmrVapt6VbrdvPPIllRV2EnjtNEuUvSPhHoZ2beOWGv616dhaKj.png"
                alt="bannerImg"
              />
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <img
                className="w-[300px] h-auto rounded-2xl"
                src="https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/B1NA6mAiwsmrVapt6VbrdvPPIllRV2EnjtNEuUvSPhHoZ2beOWGv616dhaKj.png"
                alt="bannerImg"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
};

export default CarouselComponent;
