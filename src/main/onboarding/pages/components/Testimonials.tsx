import "../../../../styles/browse.css";

import imagess from "../../../../assets/HomeImg/testimonials.png";

const Testimonials = () => {
  const Testimony = [
    {
      author: " Grace Jennifer Williams",
      testimonials:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      author: " Grace Jennifer Williams",
      testimonials:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      author: " Grace Jennifer Williams",
      testimonials:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
  ];

  return (
    <div className="bg-testimonials py-16">
      <div className="bg-[#272EA7] sm:max-w-[80%] mx-auto">
        <div className="testimonials_headers text-center py-8">
          <h1 className="text-white capitalize py-3 test-xl">Testimonials</h1>
          <h1 className="text-white text-3xl">
            What <span>Patients</span> have to say about{" "}
            <span>CosmicForge</span> .
          </h1>
        </div>
        <div className="w-full overflow-x-auto scroll-smooth no-scrollbar px-4 sm:px-16">
          <div
            // className="grid grid-cols-4 gap-4 px-4 py-6
            // snap-x snap-mandatory
            // w-max"
            className="grid sm:grid-cols-2 lg:grid-cols-3 items-start gap-8 pb-16"
          >
            {Testimony.map((items, index) => (
              <section
                className="relative flex flex-col items-center justify-center"
                key={index}
              >
                <div className="relative top-[25px] w-28 flex justify-center items-center">
                  <img src={imagess} alt="" />
                </div>
                <div className="bg-white p-2 py-8 text-center ">
                  <h1 className="text-[#272EA7] capitalize font-semibold">
                    {items.author}
                  </h1>
                  <p className="tracking-wider pt-4 leading-6 text-sm text-[#030303]">
                    {items.testimonials}
                  </p>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
