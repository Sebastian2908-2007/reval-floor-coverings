"use client";



import {useState} from "react";

export default function BeforeAfterImg({imgPaths}) {
    
  const [sliderPosition, setSliderPosition] = useState(50);
  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[550px] xl:h-[700px] overflow-hidden">
        {/* Before Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${imgPaths.path1}')`,
            clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
          }}
        />
        {/* After Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${imgPaths.path2}')`,
            clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)`,
          }}
        />
        {/* Slider Handle */}
        <div
          className="absolute inset-y-0 w-[2px] bg-white pointer-events-none"
          style={{
            left: `${sliderPosition}%`,
          }}
        />
      </div>
      {/* Slider Input */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={handleSliderChange}
        className="w-full mt-4 custom-slider"
        style={{ '--slider-position': `${sliderPosition}%` }}
      />
      <div className="flex justify-between mt-4 mb-6 ">
        <span className="text-sm text-white bg-[#000000] p-2 rounded-full shadow-md">Before</span>
        <span className="text-sm text-white bg-[#2f4b65] p-2 rounded-full shadow-md">After</span>
      </div>
    </div>
  );
}
