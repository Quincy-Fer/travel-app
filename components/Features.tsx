import Image from "next/image";

const Features = () => {
  return (
    <section
      className="border-2 border-red-500 flex-col flex-center overflow-hidden 
            bg-feature-bg bg-center bg-no-repeat py-24 "
    >
      <div className="max-container padding-container relative w-full justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/phone.png"
            width={440}
            height={1000}
            alt="phone"
            className="feature-phone"
          />
        </div>
        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative">
            
            <Image src="/camp.svg" width={50} height={50} alt="camp" className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"/>
          </div>
          <h2 className="bold-40 lg:bold-64">Our Features</h2>
        </div>
      </div>
    </section>
  );
};

export default Features;
