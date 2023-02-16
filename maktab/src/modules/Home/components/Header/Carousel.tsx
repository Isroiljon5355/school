import { Carousel } from "@mantine/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import Img from "../imgs/1.jpg";
import Img1 from "../imgs/cdc-GDokEYnOfnE-unsplash.jpg";
import Img2 from "../imgs/maktabsinf.jpg"
import { Box } from "@mantine/core";
import { useRef } from "react";
const data = [
  {
    id: 1,
    url: Img,
    title: "salom",
  },
  {
    id: 2,
    url: Img1,
    title: "salom",
  },
  {
    id: 3,
    url: Img2,
    title: "salom",
  },
];

const Slider = () => {
  const autoplay = useRef(Autoplay({ delay: 2500 }));
  return (
    <>
      <Carousel
        sx={{ maxWidth: "100%" }}
        mx="auto"
        loop
        withIndicators
        height={"80vh"}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        styles={{
          indicator: {
            width: 12,
            height: 4,
            transition: "width 250ms ease",

            "&[data-active]": {
              width: 30,
            },
          },
        }}
      >
        {data.map((item) => {
          return (
            <Carousel.Slide key={item.id}>
              <Image
                src={item.url}
                alt="img"
                fill
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </Carousel.Slide>
          );
        })}
      </Carousel>
    </>
  );
};
export default Slider;
