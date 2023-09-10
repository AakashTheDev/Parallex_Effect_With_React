import { Parallax } from "react-parallax";
import Astro from "../Images/Space-Station.jpg";

const ImageTwo = () => (
  <Parallax
    blur={0}
    bgImage={Astro}
    bgImageStyle={{ minHeight: "100vh" }}
    className="relative h-[100vh]"
    strength={800}
  >
    <div className="flex justify-center items-center absolute h-[100vh] w-[100%]">
      <span className="bg-[#333] uppercase p-[1rem] tracking-[24px] text-[24px] text-white font-bold">
        Are You Ready?
      </span>
    </div>
  </Parallax>
);

export default ImageTwo;
