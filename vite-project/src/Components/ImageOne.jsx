import { Parallax } from "react-parallax";
import Nasa from "../Images/Milky-Way.jpg";

const ImageOne = () => (
  <Parallax
    blur={0}
    bgImage={Nasa}
    bgImageStyle={{ minHeight: "100vh" }}
    className="relative h-[100vh]"
    strength={800}
  >
    <div className="flex justify-center items-center absolute h-[100vh] w-[100%]">
      <span className="bg-[#333] uppercase p-[1rem] tracking-[24px] text-[24px] text-white font-bold">
        A Trip to Space
      </span>
    </div>
  </Parallax>
);

export default ImageOne;
