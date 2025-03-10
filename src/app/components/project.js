
const slides = [
    {
      id: 1,
      images:"/images/project/1.png",
    },
    {
        id: 2,
        images:"/images/project/2.jpg",
    },
    {
        id: 3,
        images:"/images/project/3.jpg",
      },
      {
        id: 4,
        images:"/images/project/4.jpg",
      },
      {
        id: 5,
        images:"/images/project/5.jpg",
      },
      {
        id: 6,
        images:"/images/project/6.png",
      },                          
  ];

export default function ProjectSlide(){

    return (
        <div>
            <h2 className="my-[60px] text-[32px] lg:text-[42px] text-center">
             ตัวอย่างเว็บไซต์จาก Adsgenda
            </h2>
            <div className="max-w-[1440px] m-auto grid grid-cols-2 lg:grid-cols-3 gap-[20px]">
                {slides.map((slide, index) => (
                    <div className="bg-[url(/images/project/bg-project.png)] bg-cover">
                        <div className="relative mx-[3px] lg:mx-[7px] mt-3 lg:mt-8 h-[200px] lg:h-[560px] overflow-y-scroll">
                            <img
                            src={slide.images}
                            alt={`Slide ${slide.id}`}
                            className="absolute top-0 bottom-0 object-cover"
                            /> 
                        </div>               
                    </div>
                ))}
            </div>
        </div>
    )
}