import VideoPlayerPage from "../VR/VideoPlayerPage";
import tomb from "../../../assets/delhi/tomb.jpeg";
import akshardham from "../../../assets/delhi/akshardham.jpg";
import fort from "../../../assets/delhi/fort.jpg";
import aiims from "../../../assets/delhi/aiims.jpg";
import fortis from "../../../assets/delhi/fortis.jpg";
import medanta from "../../../assets/delhi/medanta.jpg";
import cardiology from "../../../assets/cardiology.png";
import oncology from "../../../assets/oncology.png";
import transplant from "../../../assets/transplant.png";

const Delhi = () => {
  const cardData = [
    {
      image: tomb,
      text: "Commissioned by Humayun’s widow, this stunning garden tomb in Delhi is a masterpiece of Mughal architecture and a precursor to the Taj Mahal. Its grand design, Persian-inspired elements, and expansive gardens make it a significant historical landmark.",
    },
    {
      image: akshardham,
      text: "A modern architectural marvel in Delhi, Akshardham Temple showcases intricate carvings and displays Indias ancient art, culture, and spirituality. The temple complex includes beautiful gardens, musical fountains, and a cultural boat ride.",
    },
    {
      image: fort,
      text: "A UNESCO World Heritage Site in Delhi, the Red Fort is a magnificent symbol of Mughal architecture and Indias struggle for independence. Built by Emperor Shah Jahan in 1648, it served as the main residence of Mughal emperors for nearly 200 years",
    },
    {
      image: fortis,
      text: "Fortis Memorial Research Institute (FMRI) is a multi-specialty tertiary care hospital located in Gurgaon, Haryana. It is renowned for offering advanced medical treatments across specialties, with cutting-edge technology and expert medical professionals.",
    },
    {
      image: aiims,
      text: "AIIMS (All India Institute of Medical Sciences), Delhi is a premier medical institution and hospital in India, renowned for providing world-class healthcare services, cutting-edge research, and advanced medical education.",
    },
    {
      image: medanta,
      text: "Medanta - The Medicity is a renowned multi-specialty hospital located in Gurgaon, Haryana, known for offering advanced medical treatments across various specialties. It is equipped with cutting-edge technology and world-class infrastructure, providing comprehensive healthcare services.  ",
    },
    {
      image: cardiology,
      text: "Cardiac Surgery. Offering world-class treatment for heart conditions, including bypass surgery, angioplasty, and valve replacements.",
    },
    {
      image: oncology,
      text: "Oncology. Advanced cancer care, including chemotherapy, radiation therapy, and cutting-edge surgical treatments.",
    },
    {
      image: transplant,
      text: "Orthopedic Surgery. Specializing in joint replacements, trauma care, and spinal surgeries using the latest techniques.",
    },
  ];

  return (
    <section className="pt-[var(--section-padding)]">
      {/* First heading and subheading */}
      <div className="industry-container">
        <div className="flex justify-center w-full">
          <div className="flex flex-col text-center w-full flex-custom-center">
            <h2 className="text-4xl font-bold text-black mb-4">Delhi</h2>
            <p className="text-2xl text-black mb-6 w-[80%]">
              Delhi is a top destination for medical tourism with world-class
              hospitals. It offers cutting-edge treatments, and visitors can
              also explore the city's vibrant tech culture and historical
              landmarks.
            </p>
          </div>
        </div>
      </div>

      {/* Tourist places */}
      <div className="relative py-20 w-full flex justify-center items-center">
        <div className="flex flex-col gap-6 w-full justify-center items-center">
          <h3 className="text-3xl font-semibold text-black mb-4">
            Top Tourist Places
          </h3>
          <div className="md:flex md:flex-row flex flex-col justify-around w-[90%] gap-6">
            {cardData.slice(0, 3).map((card, colIndex) => (
              <div
                key={colIndex}
                className="flip-card md:w-[30%] md:h-[15rem] w-full"
              >
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      src={card.image}
                      alt={`Image ${colIndex + 1}`}
                      className="carousel-image w-full h-[20rem] object-cover rounded-lg"
                    />
                  </div>
                  <div className="flip-card-back p-6 flex justify-center items-center">
                    <p className="text-white text-lg font-medium leading-relaxed">
                      {card.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hospitals */}
      <div className="relative py-20 w-full flex justify-center items-center">
        <div className="flex flex-col gap-6 w-full justify-center items-center">
          <h3 className="text-3xl font-semibold text-black mb-4">
            Hospitals in Delhi
          </h3>
          <div className="md:flex md:flex-row flex flex-col justify-around w-[90%] gap-6">
            {cardData.slice(3, 6).map((card, colIndex) => (
              <div
                key={colIndex}
                className="flip-card md:w-[30%] md:h-[15rem] w-full"
              >
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      src={card.image}
                      alt={`Image ${colIndex + 4}`}
                      className="carousel-image w-full h-[20rem] object-cover rounded-lg"
                    />
                  </div>
                  <div className="flip-card-back p-6 flex justify-center items-center">
                    <p className="text-white text-lg font-medium leading-relaxed">
                      {card.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-[80%] h-fit flex flex-col items-center justify-center gap-10 bg-[#052560] rounded-2xl mt-5">
            <h4 className="text-white mt-[2rem]">
              Explore our latest VR exploration feature
            </h4>
            <div className="w-[90%]">
              <VideoPlayerPage />
            </div>
          </div>
        </div>
      </div>

      {/* Treatments */}
      <div className="relative py-20 w-full flex justify-center items-center">
        <div className="flex flex-col gap-6 w-full justify-center items-center">
          <h3 className="text-3xl font-semibold text-black mb-4">
            Top Treatments
          </h3>
          <div className="md:flex md:flex-row flex flex-col justify-around w-[90%] gap-6">
            {cardData.slice(6, 9).map((card, colIndex) => (
              <div
                key={colIndex}
                className="flip-card md:w-[30%] md:h-[15rem] w-full"
              >
                <div className="flip-card-inner">
                  <div className="flip-card-front flex justify-center items-center">
                    <img
                      src={card.image}
                      alt={`Image ${colIndex + 7}`}
                      className="carousel-image w-[10rem] h-[20rem] object-contain rounded-lg"
                    />
                  </div>
                  <div className="flip-card-back p-6 flex justify-center items-center">
                    <p className="text-white text-lg font-medium leading-relaxed">
                      {card.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Delhi;
