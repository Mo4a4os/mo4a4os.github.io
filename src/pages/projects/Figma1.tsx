

const Figma1 = () => {
  return (
    <div className="bg-white font-[Sen]  text-black border-gray-500 rounded min-h-screen border">
      <div className="mt-20">
        <div className="flex justify-center">
          <h1 className="text-5xl font-bold text-center max-w-lg">
            Discover the beauty around the world
          </h1>
        </div>
        <div className="flex justify-center">
          <p className="text-center flex mt-5 max-w-lg text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            pariatur velit fugit vero libero necessitatibus aliquid quis veniam
            deleniti mollitia?
          </p>
        </div>
        <div className="justify-center mt-5 flex">
          <a className="bg-zinc-800 text-white px-4 p-2.5 rounded-xl" href="#">
            Explore
          </a>
        </div>
        <div className="flex justify-center mx-2">
          <div className="grid grid-rows-2">
            <div className="grid grid-cols-4 gap-4 mt-10">
              <img src="/images/figma1/Rectangle 3.png" alt="" />
              <img src="/images/figma1/1.png" alt="" />
              <img src="/images/figma1/2.png" alt="" />
              <img src="/images/figma1/2-1.png" alt="" />
            </div>
            <div className="grid grid-cols-4 gap-4 my-4">
              <img src="/images/figma1/3.png" alt="" />
              <img src="/images/figma1/3-1.png" alt="" />
              <img src="/images/figma1/4.png" alt="" />
              <img src="/images/figma1/4-1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Figma1;
