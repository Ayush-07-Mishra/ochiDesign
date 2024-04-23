import React from "react";

function Eyes() {
  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
        <div className="absolute flex justify-between text-center gap-8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex justify-center items-center w-[15vw] h-[15vw] rounded-full bg-[#F1F1F1]">
            <div className="flex justify-center items-center w-3/5 h-3/5 bg-zinc-800 rounded-full">
              <div className="text-[#f1f1f1] uppercase text-[1.2vw] font-light">Play</div>
            </div>
          </div>
          <div className=" flex justify-center items-center w-[15vw] h-[15vw] rounded-full bg-[#F1F1F1]">
          <div className="flex justify-center items-center w-3/5 h-3/5 bg-zinc-800 rounded-full">
              <div className="text-[#f1f1f1] uppercase text-[1.2vw] font-light">Play</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
