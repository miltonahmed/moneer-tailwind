import Container from "../../Utils/Container";

const roadmapData = [
  { title: 'Pre-ICO Opens', date: 'August 23, 2021' },
  { title: 'Private Token Round', date: 'September 10, 2021' },
  { title: 'ICO Opens', date: 'September 28, 2021' },
  { title: 'Crowdsale Ends', date: 'October 10, 2021' },
];
const RoadMap = () => {
  return (
    // <div className=" bg-amber-900">
    //   <Container>

    //       <h2 className="text-4xl text-white font-bold leading-12 text-center mb-12">
    //         Token Sale Roadmap
    //       </h2>
    //         {/* Timeline container */}
    //         <div className="relative flex items-center justify-between w-full ">
    //           {/* Line */}
    //           <div className="absolute top-[10px] left-0 right-0 h-[3px] bg-orange-500 w-full z-10"></div>

    //           {roadmapData.map((item, index) => (
    //             <div
    //               key={index}
    //               className="flex flex-col  items-center text-center"
    //             >
    //               {/* Dot */}
    //               <div className="w-[20px] h-[20px] bg-[#FF5851] rounded-full "></div>
    //               {/* Text */}
    //               <h4 className="mt-6 text-base text-white font-montserrat leading-6 tracking-[0.533px]">{item.title}</h4>
    //               <span className="text-gray-300 text-xs">{item.date}</span>
    //             </div>
    //           ))}
    //         </div>
    // </Container>
    // </div>
    <div className="bg-url">
      <Container>
        <div className="bg-gradient-to-r from-purple-700 to-purple-800 py-16 px-8 text-white">
          <h2 className="text-2xl font-bold text-center mb-12">
            Token Sale Roadmap
          </h2>

          {/* Timeline */}
          <div className="relative flex items-center justify-between max-w-5xl mx-auto">
            {/* Center Line */}
            <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-orange-500 z-0"></div>

            {roadmapData.map((item, index) => {
              const isBottom = index === 0 || index === 2; // 1st & 3rd item text below
              return (
                <div
                  key={index}
                  className="flex flex-col items-center relative z-10"
                >
                  {/* Top text */}
                  {!isBottom && (
                    <div className="mb-6 text-center">
                      <h4 className="font-bold text-sm">{item.title}</h4>
                      <span className="text-gray-300 text-xs">{item.date}</span>
                    </div>
                  )}

                  {/* Dot on the line */}
                  <div className="relative flex items-center justify-center">
                    <div className="w-[20px] h-[20px] bg-[#FF5851] rounded-full border-4 border-purple-800">
                      
                    </div>
                    
                  </div>

                  {/* Bottom text */}
                  {isBottom && (
                    <div className="mt-6 text-center">
                      <h4 className="font-bold text-sm">{item.title}</h4>
                      <span className="text-gray-300 text-xs">{item.date}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RoadMap;
