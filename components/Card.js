import Image from "next/image";

export default function Card({title,desc,image_path,side}) {

  return (
    <div className="md:py-8 md:px-12  bg-black p-4 border-t-4 border-gray-900">
      <div className="container  mx-auto flex sm:flex-row flex-col items-center">
      {side =='right'&&(<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            alt="Tv Monitor"
            src={image_path}
            width={500} height={400}
          ></Image>
        </div>)}
        <div className="text-white lg:flex-grow md:w-1/2 md:pr-8 flex flex-col md:items-start md:text-left  md:mb-0 items-center text-center">
          <h1 className="sm:text-4xl text-3xl md:mb-4 font-bold ">
            {title}
          </h1>
          <h2 className="text-lg sm:text-3xl md:mt-4 md:mb-8">
            {desc}
          </h2>
        </div>
        {side =='left'&&(<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            alt="Tv Monitor"
            src={image_path}
            width={500} height={400}
          ></Image>
        </div>)}
    </div>
  </div>
  );
}
