import { Parallax } from "react-parallax";
import Moon from "../Images/Moon.jpg";

const ImageFour = () => (
  <Parallax
    blur={0}
    bgImage={Moon}
    bgImageStyle={{ minHeight: "100vh" }}
    className="relative h-[100vh]"
    strength={800}
  >
    <div className="flex flex-col justify-center items-center absolute h-[100vh] w-[100%]">
      <span className="bg-[#333] uppercase p-[1rem] tracking-[24px] text-[24px] text-white font-bold">
        Contact Us
      </span>
    </div>
  </Parallax>
);

export default ImageFour;
