import { Parallax } from "react-parallax";
import Earth from "../Images/Earth.jpg";

const ImageThree = () => (
  <Parallax
    blur={0}
    bgImage={Earth}
    bgImageStyle={{ minHeight: "100vh" }}
    className="relative h-[100vh]"
    strength={800}
  >
    <div className="flex justify-center items-center absolute h-[100vh] w-[100%]">
      <span className="bg-[#333] uppercase p-[1rem] tracking-[24px] text-[24px] text-white font-bold">
        Book Your Tickets Now
      </span>
    </div>
  </Parallax>
);

export default ImageThree;
