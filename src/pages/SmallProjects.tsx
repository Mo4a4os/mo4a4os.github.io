import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../components/LanguageContext";
import ProjectLink from "@/components/ProjectLink";
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
          <ProjectLink label='Random Number Generator' t="/projects/small/Random" />
          <ProjectLink label="Countdown Timer" t="/projects/small/Countdown" />
          <ProjectLink
            label="lorem-ipsum generator"
            t="/projects/small/loremgenerator/home"
          />
          <ProjectLink label="calculator" t="/projects/small/calculator" />
          <ProjectLink label="Todo List" t="/projects/small/todo" />
          <ProjectLink label="Figma Mockup" t="/projects/small/figma-1" />
          <ProjectLink label="Figma Mockup 2" t="/projects/small/figma-2" />
          <ProjectLink label="Figma Mockup 3" t="/projects/small/figma-3" />
          <ProjectLink label="Figma Mockup 4" t="/projects/small/figma-4" />
          {/*
          <ProjectLink label='' t="/projects/small/" />
          */}
        </div>
        <p className="text-center">
          All Figma designs used in the Figma mockup are available at the
          following link: <br />
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
          <ProjectLink label='Random Number Generator' t="/projects/small/Random" />
          <ProjectLink label="Countdown Timer" t="/projects/small/Countdown" />
          <ProjectLink
            label="lorem-ipsum generator"
            t="/projects/small/loremgenerator/home"
          />
          <ProjectLink label="calculator" t="/projects/small/calculator" />
          <ProjectLink label="Todo List" t="/projects/small/todo" />
          <ProjectLink label="Figma верстка" t="/projects/small/figma-1" />
          <ProjectLink label="Figma верстка 2" t="/projects/small/figma-2" />
          <ProjectLink label="Figma верстка 3" t="/projects/small/figma-3" />
          <ProjectLink label="Figma верстка 4" t="/projects/small/figma-4" />
          {/*
          <ProjectLink label='' t="/projects/small/" />
          */}
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
