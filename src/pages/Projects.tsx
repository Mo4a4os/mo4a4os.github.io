import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../components/LanguageContext";
export const Projects = () => {
  const { language } = useContext(LanguageContext);
  if (language === 'en') {
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
      <p className="my-8">
       Small projects are one-page sites that were made in
        1 hour (mostly). Real projects, in turn, are sites above
        which I really tried.
      </p>
      <p>P.S Some sites may not have Russian/English localization</p>
    </div>
  );
  } else {
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
      <p className="my-8">
        Маленькие проекты - это одностраничные сайты, которые были сделаны за
        1 час (в основном). Настоящие проекты, в свою очередь, это сайты над
        которыми я действительно старался.
      </p>
      <p>P.S Некоторые сайты могут не иметь русской/английской локализации</p>
    </div>
  );
  }
 
};
