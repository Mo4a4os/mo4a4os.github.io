import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export function Navbar() {
  const { language, setLanguage } = useContext(LanguageContext);
  const toggleLanguage = () => {
    const newLang = language === "ru" ? 'en' : "ru"
    setLanguage(newLang);
    localStorage.setItem('lang', newLang)
  };
  if (language ==='ru') {
    return (
    <nav className="m-5 flex justify-between items-center text-2xl">
      <div className="flex">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `inline-block mx-6 transform transition-transform duration-200 hover:scale-125 ${
              isActive ? "underline font-semibold" : "text-gray-500"
            }`
          }
        >
          Главная
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `inline-block mx-6 transform transition-transform duration-200 hover:scale-125 ${
              isActive ? "underline font-semibold" : "text-gray-500"
            }`
          }
        >
          Проекты
        </NavLink>
      </div>

      <button
        onClick={toggleLanguage}
        className="mr-6 px-3 py-1 border rounded hover:bg-gray-100 transition hover:text-black"
      >
        ENG/RU
      </button>
    </nav>
  );
  } else {
    return (
    <nav className="m-5 flex justify-between items-center text-2xl">
      <div className="flex">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `inline-block mx-6 transform transition-transform duration-200 hover:scale-125 ${
              isActive ? "underline font-semibold" : "text-gray-500"
            }`
          }
        >
          Main
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `inline-block mx-6 transform transition-transform duration-200 hover:scale-125 ${
              isActive ? "underline font-semibold" : "text-gray-500"
            }`
          }
        >
          Projects
        </NavLink>
      </div>

      <button
        onClick={toggleLanguage}
        className="mr-6 px-3 py-1 border rounded hover:bg-gray-100 transition hover:text-black"
      >
        ENG/RU
      </button>
    </nav>
  );
  }
  
}
