import { FaCheckSquare } from "react-icons/fa";

const About = () => {
  return (
    <main className="flex flex-col sm:flex-row gap-[2vmax] justify-center mx-[3.5vw] my-[3vw]">
      <div className="grid grid-cols-2 items-stretch gap-[2vmin] relative">
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="border-2 rounded-full border-white p-[2vmax] border-dashed">
            <div className="bg-white p-[1.5vmax] rounded-full">
              <div className="border-2 rounded-full border-primary p-[2vmax] border-dashed">
                <img
                  src="/PDESISHome/logo.svg"
                  alt="logo"
                  width={79}
                  className="w-[4.15vw] h-[4.15vw]"
                />
              </div>
            </div>
          </div>
        </div>
        <img
          src="/PDESISHome/about-1.png"
          alt="about-pdesis"
          width={853}
          className="sm:w-[20vw]"
        />
        <img
          src="/PDESISHome/about-2.png"
          alt="about-pdesis"
          width={853}
          className="sm:w-[20vw]"
        />
        <img
          src="/PDESISHome/about-3.png"
          alt="about-pdesis"
          width={853}
          className="sm:w-[20vw]"
        />
        <img
          src="/PDESISHome/about-4.png"
          alt="about-pdesis"
          width={853}
          className="sm:w-[20vw]"
        />
      </div>
      <div className="flex flex-col items-start sm:max-w-[45vw] justify-between">
        <h1 className="text-[1.5vmax] font-bold text-secondary">
          About <span className="text-primary">PD</span>ESIS
        </h1>
        <p className="text-[1.05vmax] font-medium">
          PRADEEPNA ELECTRONIC SECURITY and IT SOLUTIONS &#40;PDESIS&#41; is a
          young, vibrant and solution-oriented team aiming to be a robust Hybrid
          and IT integrated Security Solution provider. We strive to achieve the
          highest level of Customer Satisfaction through Quality and Reliability
          of our Products and Services, to be achieved by our will to deliver
          better by consistently improving our Products, Systems and Services.
          We envision to be a trusted Turn Key Consultant and are focussed to be
          one of the finest and efficient IT Solution providers in India
          encompassing Government, Education, Healthcare and Commercial
          Establishments. We envision Smart and Safe Establishments for the
          Future. Established on 21.04.2017, Headquartered at Gangtok, Sikkim,
          PDESIS is an ISO 9001-2015, ISO 27001:2013, ISO 20000-1:2018 certified
          Firm, empanelled with Govt. of Sikkim, duly registered with Ministry
          of MSME, Govt. E-Marketplace &#40;GEM&#41;, Govt. of India with ROHS,
          CE and FCC Accreditation.
        </p>
        <div className="grid grid-cols-2 gap-[1.5vmin]">
          <div className="flex items-center gap-[1.2vmin]">
            <FaCheckSquare className="text-primary text-[1.05vmax]" />
            <p className="text-[1.05vmax] font-semibold text-secondary">
              Registered with Ministry of MSME
            </p>
          </div>
          <div className="flex items-center gap-[1.2vmin]">
            <FaCheckSquare className="text-primary text-[1.05vmax]" />
            <p className="text-[1.05vmax] font-semibold text-secondary">
              Govt. E-Marketplace &#40;GEM&#41;
            </p>
          </div>
          <div className="flex items-center gap-[1.2vmin]">
            <FaCheckSquare className="text-primary text-[1.05vmax]" />
            <p className="text-[1.05vmax] font-semibold text-secondary">
              ⁠ROHS, CE & FCC Accreditation
            </p>
          </div>
          <div className="flex items-center gap-[1.2vmin]">
            <FaCheckSquare className="text-primary text-[1.05vmax]" />
            <p className="text-[1.05vmax] font-semibold text-secondary">
              ⁠Empanneled with Government of Sikkim.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
