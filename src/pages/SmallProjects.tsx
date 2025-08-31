import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../components/LanguageContext";
export const SmallProjects = () => {
  const { language } = useContext(LanguageContext);
  if (language === "en") {
    return (
      <div className="p-8">
        <nav className="flex justify-center">
          <NavLink
            className={({ isActive }) =>
              `inline-block mx-10 transform transition-transform duration-200 hover:scale-125 ${
                isActive ? "underline font-semibold" : "text-gray-500"
              }`
            }
            to="/projects/small"
          >
            Small Projects
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `inline-block mx-10 transform transition-transform duration-200 hover:scale-125 ${
                isActive ? "underline font-semibold" : "text-gray-500"
              }`
            }
            to="/projects/real"
          >
            Real Projects
          </NavLink>
        </nav>
        <div className="grid grid-cols-3 my-5 text-center">
          <div className="mx-10 my-3">
            <Link
              to="/projects/small/random"
              className="p-3 inline-block bg-white text-black hover:scale-95 transform transition-transform rounded-lg hover:bg-slate-200"
            >
              Random Number Generator
            </Link>
          </div>
          <div className="mx-10 my-3">
            <Link
              to="/projects/small/countdown"
              className="p-3 inline-block bg-white text-black hover:scale-95 transform transition-transform rounded-lg hover:bg-slate-200"
            >
              Countdown Timer
            </Link>
          </div>

          <div className="mx-10 my-3">
            <Link
              to="/projects/small/loremgenerator/home"
              className="p-3 inline-block bg-white text-black hover:scale-95 transform transition-transform rounded-lg hover:bg-slate-200"
            >
              Lorem-Ipsum Generator
            </Link>
          </div>
          <div className="mx-10 my-3">
            <Link
              to="/projects/small/calculator"
              className="p-3 inline-block bg-white text-black hover:scale-95 transform transition-transform rounded-lg hover:bg-slate-200"
            >
              Calculator
            </Link>
          </div>
          <div className="mx-10 my-3">
            <Link
              to="/projects/small/todo"
              className="p-3 inline-block bg-white text-black hover:scale-95 transform transition-transform rounded-lg"
            >
              Todo List
            </Link>
          </div>
          <div className="mx-10 my-3">
            <Link
              to="/projects/small/figma-1"
              className="p-3 inline-block bg-white text-black hover:scale-95 transform transition-transform rounded-lg"
            >
              Figma Mockup
            </Link>
          </div>
          <div className="mx-10 my-3">
            <Link
              to="/projects/small/figma-2"
              className="p-3 inline-block bg-white text-black hover:scale-95 transform transition-transform rounded-lg"
            >
              Figma Mockup 2
            </Link>
          </div>
          {/* <div className="mx-10 my-3"><Link to="/projects/small/" className="p-3 inline-block bg-white text-black hover:scale-95 transform transition-transform rounded-lg" ></Link></div>*/}
        </div>
        <p className="text-center">All Figma designs used in the Figma mockup are available at the following link: <br />
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="text-fuchsia-400"
            href="https://www.figma.com/design/HjPyKuDyNlZPni7gsjAoqe"
          >
            https://www.figma.com/design/HjPyKuDyNlZPni7gsjAoqe
          </a></p>
      </div>
    );
  } else {
    return (
      <div className="p-8">
        <nav>
          <nav className="flex justify-center">
            <NavLink
              className={({ isActive }) =>
                `inline-block mx-10 transform transition-transform duration-200 hover:scale-125 ${
                  isActive ? "underline font-semibold" : "text-gray-500"
                }`
              }
              to="/projects/small"
            >
              Маленькие проекты
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `inline-block mx-10 transform transition-transform duration-200 hover:scale-125 ${
                  isActive ? "underline font-semibold" : "text-gray-500"
                }`
              }
              to="/projects/real"
            >
              Настоящие проекты
            </NavLink>
          </nav>
        </nav>
        <div className="grid grid-cols-3 my-5 text-center">
          <div className="mx-10 my-3">
            <Link
              to="/projects/small/random"
              className="p-3 inline-block bg-white text-black hover:scale-95 transform transition-transform rounded-lg hover:bg-slate-200"
            >
              Random Number Generator
            </Link>
          </div>
          <div className="mx-10 my-3">
            <Link
              to="/projects/small/countdown"
              className="p-3 inline-block bg-white text-black hover:scale-95 transform transition-transform rounded-lg hover:bg-slate-200"
            >
              Countdown Timer
            </Link>
          </div>

          <div className="mx-10 my-3">
            <Link
              to="/projects/small/loremgenerator/home"
              className="p-3 inline-block bg-white text-black hover:scale-95 transform transition-transform rounded-lg hover:bg-slate-200"
            >
              Lorem-Ipsum Generator
            </Link>
          </div>
          <div className="mx-10 my-3">
            <Link
              to="/projects/small/calculator"
              className="p-3 inline-block bg-white text-black hover:scale-95 transform transition-transform rounded-lg hover:bg-slate-200"
            >
              Calculator
            </Link>
          </div>

          <div className="mx-10 my-3">
            <Link
              to="/projects/small/todo"
              className="p-3 inline-block bg-white text-black hover:scale-95 transform transition-transform rounded-lg"
            >
              Todo List
            </Link>
          </div>
          <div className="mx-10 my-3">
            <Link
              to="/projects/small/figma-1"
              className="p-3 inline-block bg-white text-black hover:scale-95 transform transition-transform rounded-lg"
            >
              Figma верстка
            </Link>
          </div>
          <div className="mx-10 my-3">
            <Link
              to="/projects/small/figma-2"
              className="p-3 inline-block bg-white text-black hover:scale-95 transform transition-transform rounded-lg"
            >
              Figma верстка 2
            </Link>
          </div>
          {/* <div className="mx-10 my-3"><Link to="/projects/small/" className="p-3 inline-block bg-white text-black hover:scale-95 transform transition-transform rounded-lg hover:bg-slate-200" ></Link></div>*/}
        </div>
        <p className="text-center">
          Все Figma дизайны которые были использованы в Figma верстка находятся
          по ссылке:
          <br />
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="text-fuchsia-400"
            href="https://www.figma.com/design/HjPyKuDyNlZPni7gsjAoqe"
          >
            https://www.figma.com/design/HjPyKuDyNlZPni7gsjAoqe
          </a>
        </p>
      </div>
    );
  }
};
