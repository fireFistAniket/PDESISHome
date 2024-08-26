const Navbar = () => {
  return (
    <nav className="px-[3.75vw] py-[1.22vw] flex items-center justify-between">
      <div>
        <img
          src="/PDESISHome/logo.svg"
          alt="logo"
          width={79}
          height={96}
          className="w-[6.5vw] sm:w-[4.15vw]"
        />
      </div>
      <ul className="sm:flex items-center gap-[2vmax] hidden">
        <li className="text-[1.44vmax] font-semibold text-secondary hover:text-primary">
          <a href="#">Home</a>
        </li>
        <li className="text-[1.44vmax] font-semibold text-secondary hover:text-primary">
          <a href="#">About PDESIS</a>
        </li>
        <li className="text-[1.44vmax] font-semibold text-secondary hover:text-primary">
          <a href="#">Why Us</a>
        </li>
        <li className="text-[1.44vmax] font-semibold text-secondary hover:text-primary">
          <a href="#">Our Products &amp; Services</a>
        </li>
      </ul>
      <a
        href="#"
        className="text-[1.44vmax] font-semibold bg-primary text-white capitalize py-1 px-[1.44vmax] rounded-full"
      >
        contact us
      </a>
    </nav>
  );
};

export default Navbar;
