import About from "./components/About";
import Navbar from "./components/Navbar";
import SectionHeader from "./components/SectionHeader";
import WhyChoose from "./components/WhyChoose";
import ChooseCardData from "./utils/why-choose.json";
import ServicesData from "./utils/Services.json";
import ProductCard from "./components/ProductCard";
import ProducstsData from "./utils/Products.json";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <img
          src="/PDESISHome/hero.png"
          alt="hero"
          className="w-full max-h-[40vw] object-cover"
          width={1440}
          height={514}
        />
      </div>
      <div className="flex items-center justify-between mx-[3.5vw] my-[3vw] gap-[2vmax]">
        <h3 className="text-secondary font-bold text-[2.5vmax]">Our Brands</h3>
        <div className="flex flex-wrap sm:flex-nowrap sm:items-center sm:justify-evenly gap-[2vmin] flex-1">
          <div className="flex items-center justify-center bg-white border-main border px-[2vmax] py-[1.5vmax] rounded">
            <img
              src="/PDESISHome/amd-brand.png"
              alt="amd"
              width={160}
              height={79}
              className="w-[8.33vw]"
            />
          </div>
          <div className="flex items-center justify-center bg-white border-main border px-[2vmax] py-[1.5vmax] rounded">
            <img
              src="/PDESISHome/honeywell-brand.png"
              alt="amd"
              width={160}
              height={79}
              className="w-[8.33vw]"
            />
          </div>
          <div className="flex items-center justify-center bg-white border-main border px-[2vmax] py-[1.5vmax] rounded">
            <img
              src="/PDESISHome/microsoft-brand.png"
              alt="amd"
              width={160}
              height={79}
              className="w-[8.33vw]"
            />
          </div>
          <div className="flex items-center justify-center bg-white border-main border px-[2vmax] py-[1.5vmax] rounded">
            <img
              src="/PDESISHome/lenovo-brand.png"
              alt="amd"
              width={160}
              height={79}
              className="w-[8.33vw]"
            />
          </div>
        </div>
      </div>
      <About />
      <div className="flex flex-col gap-[2vmin] mx-[3.5vw] my-[3vw]">
        <div className="flex flex-col items-start">
          <h1 className="font-bold text-[1.5vmax] text-secondary">
            Why Choose
          </h1>
          <h2 className="font-bold text-[1.5vmax] text-primary">
            Pradeepna Electronic Security and IT Solutions
          </h2>
        </div>
        <p className="text-[1.05vmax] font-medium text-black max-w-[40vmax]">
          Understanding your requirement is our prime priority. Based on such
          requirements, we strive to customise and incorporate Innovative
          Solutions.
        </p>
        <div className="grid grid-flow-row sm:grid-cols-2 gap-[1.5vmax] justify-between">
          {ChooseCardData.map((item) => (
            <WhyChoose
              key={item.id}
              bgUri={item.bgUri}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-[2.5vmin] mx-[3.5vw] my-[3vw]">
        <SectionHeader title="Our Services" />
        <div className="flex gap-[2vmin] flex-wrap justify-between">
          {ServicesData.map((item) => (
            <ProductCard
              key={item.id}
              imgUri={item.imgUri}
              title={item.title}
              btnTitle={"View Details"}
              description={item.description}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-[2.5vmin] mx-[3.5vw] my-[3vw]">
        <SectionHeader title="Our Products" />
        <div className="flex gap-[2vmin] flex-wrap justify-between">
          {ProducstsData.map((item) => (
            <ProductCard
              key={item.id}
              imgUri={item.imgUri}
              title={item.title}
              btnTitle={"Download Cat.."}
              description={item.description}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-[2.5vmin] mx-[3.5vw] my-[3vw]">
        <SectionHeader title="Our Certifications" />
        <div className="flex gap-[2vmin] flex-wrap justify-between">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="border border-main shadow-main rounded-lg overflow-hidden"
            >
              <img
                src={`/PDESISHome/certificate-${index + 1}.png`}
                alt="certificate"
                width={274}
                className="w-[20vmax]"
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
