import image from "../assets/products.png";

const Banner = () => {
  return (
    <div className="hero bg-[#EFEFEF] min-h-[calc(100vh-72px)]">
      <div className="flex flex-col gap-5 justify-center items-center py-6 max-w-7xl w-[90%] mx-auto lg:flex-row">
        <div className="text-center flex-1 lg:text-left">
          <p className="text-lg md:text-xl text-[#FFA835] uppercase font-semibold">Up To 25% Discount Check it Out</p>
          <h1 className="text-4xl font-bold my-3">New Technology Are Here</h1>
          <p className="mt-5 md:w-[90%]">
            Welcome to the future, where cutting-edge technology is reshaping
            the way we live, work, and interact with the world around us.{" "}
          </p>
        </div>
        <div className="flex-1">
          <img src={image} className="w-full" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
