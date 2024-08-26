import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className={`bg-no-repeat bg-cover bg-center overflow-hidden`}
      style={{ backgroundImage: `url('/PDESISHome/footer-bg.png')` }}
    >
      <div className="flex flex-col justify-between bg-black/75 p-[3vmax] min-h-[90vmax] sm:min-h-[48vmax]">
        <div className="flex flex-col sm:flex-row w-full justify-between gap-[4vmax]">
          <div className="flex flex-col gap-[2.5vmin] flex-1">
            <div className="flex gap-[2vmax] justify-between">
              <div className="flex flex-col gap-[2.8vmin]">
                <img
                  src="/PDESISHome/footer-logo.svg"
                  alt="logo"
                  width={142}
                  height={172}
                  className="w-[7.4vw]"
                />
                <div className="flex flex-col gap-[1vmax]">
                  <h4 className="capitalize font-semibold text-white text-[1.05vmax]">
                    Find With Us
                  </h4>
                  <div className="flex items-center gap-[1.4vmin]">
                    <FaFacebook className="text-white text-[1.08vmax]" />
                    <span className="bg-white p-1 rounded-full">
                      <FaInstagram className="text-[1.06vmax]" />
                    </span>
                    <span className="bg-white p-1 rounded-full">
                      <FaWhatsapp className="text-[1.06vmax]" />
                    </span>
                    <FaGoogle className="text-white text-[1.08vmax]" />
                    <span className="bg-white p-1 rounded-full">
                      <FaYoutube className="text-[1.06vmax]" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[1.5vmin]">
                <h3 className="font-bold text-[1.5vmax] text-white">
                  Contact Us
                </h3>
                <div className="flex flex-col gap-[1.5vmax]">
                  <p className="font-semibold text-[1.04vmax] text-white max-w-[12vmax]">
                    85/1, Baraang House, Lumsey J.H. School Road, 5th Mile,
                    Gangtok Sikkim - 737102
                  </p>
                  <p className="font-semibold text-[1.04vmax] text-white max-w-[12vmax]">
                    Phone: 03592 231258 Mobile: +91 99998 45174/+91 99992 33175
                  </p>
                  <p className="font-semibold text-[1.04vmax] text-white max-w-[12vmax]">
                    E-mail: info@pdesis.com, www.pdesis.com
                  </p>
                </div>
              </div>
              <ul className="flex flex-col gap-[1vmax]">
                <h3 className="font-bold text-[1.5vmax] text-white">
                  Our Services
                </h3>
                <li className="font-semibold text-[1.04vmax] text-white">
                  Home
                </li>
                <li className="font-semibold text-[1.04vmax] text-white">
                  About Us
                </li>
                <li className="font-semibold text-[1.04vmax] text-white">
                  Our Services
                </li>
                <li className="font-semibold text-[1.04vmax] text-white">
                  Contact Us
                </li>
                <li className="font-semibold text-[1.04vmax] text-white">
                  Gallery
                </li>
                <li className="font-semibold text-[1.04vmax] text-white">
                  Why Us
                </li>
              </ul>
            </div>
            <div className="flex gap-[3vmin] justify-between">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d16966.476473753683!2d88.5984968!3d27.3231145!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6a4fcf0c99e71%3A0x69dabf6406b0e4e1!2sPradeepna%20Electronic%20Security%20%26%20IT%20Solutions%20(PDESIS)!5e1!3m2!1sen!2sin!4v1724655250342!5m2!1sen!2sin"
                width="400"
                className="w-[20vmax] h-[12vmax] border-0 rounded"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="flex flex-col justify-between gap-[4vmin]">
                <button className="text-[1.02vmax] text-white text-center font-bold bg-white/35 border border-main min-w-[16.45vmax] rounded py-[2vmin]">
                  Privacy Policy
                </button>
                <button className="text-[1.02vmax] text-white text-center font-bold bg-white/35 border border-main min-w-[16.45vmax] rounded py-[2vmin]">
                  Terms &amp; Conditions
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[1.2vmax] flex-1 justify-between">
            <div className="bg-white rounded-lg">
              <input
                type="text"
                placeholder="Name"
                className="placeholder:font-semibold placeholder:capitalize placeholder:text-neutral-500 px-[1.5vmax] py-[1.05vmax] rounded bg-transparent w-full"
              />
            </div>
            <div className="bg-white rounded-lg">
              <input
                type="text"
                placeholder="Mobile Number"
                className="placeholder:font-semibold placeholder:capitalize placeholder:text-neutral-500 px-[1.5vmax] py-[1.05vmax] rounded bg-transparent w-full"
              />
            </div>
            <div className="bg-white rounded-lg">
              <input
                type="email"
                placeholder="Email"
                className="placeholder:font-semibold placeholder:capitalize placeholder:text-neutral-500 px-[1.5vmax] py-[1.05vmax] rounded bg-transparent w-full"
              />
            </div>
            <div className="bg-white rounded-lg">
              <input
                type="text"
                placeholder="City"
                className="placeholder:font-semibold placeholder:capitalize placeholder:text-neutral-500 px-[1.5vmax] py-[1.05vmax] rounded bg-transparent w-full"
              />
            </div>
            <div className="bg-white rounded-lg">
              <input
                type="text"
                placeholder="Message"
                className="placeholder:font-semibold placeholder:capitalize placeholder:text-neutral-500 px-[1.5vmax] py-[1.05vmax] rounded bg-transparent w-full"
              />
            </div>
            <button className="text-[1.02vmax] self-center text-white text-center font-bold bg-primary border border-main min-w-[16.45vmax] rounded py-[2vmin]">
              Send Query
            </button>
          </div>
        </div>
        <div className="w-full border border-main"></div>
        <div>
          <h1 className="font-normal text-center text-[1.25vmax] text-white">
            &copy;{" "}
            <span className="font-bold">
              PRADEEPNA ELECTRONIC SECURITY & IT SOLUTIONS.
            </span>{" "}
            All Rights Reserved | Design by Reboot Marketing Pvt. Ltd.
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
