import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="logo"
            width={129}
            height={29}
            className="m-0 w-[129px] h-[29px]"
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray group relative"
              >
                {item.label}
                {/* Underline effect using ::after */}
                <span className="absolute left-0 bottom-[-3px] w-full h-[2px] bg-coral-red scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex gap-2  max-lg:hidden wide:mr-40">
          <button className="py-3 px-6 bg-coral-red rounded-full font-medium  font-montserrat leading-normal text-lg text-white hover:bg-white hover:text-gray-700 border-2 border-coral-red  hover:border-coral-red  transition-all duration-300 ease-in-out">
            Login
          </button>
        </div>

        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
