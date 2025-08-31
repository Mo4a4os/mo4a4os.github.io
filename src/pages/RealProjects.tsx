import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../components/LanguageContext";
export const RealProjects = () => {
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
        <div className="mx-10 my-3">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/Mo4a4os/simple-todo-app"
            className="p-3 inline-block bg-white text-black hover:scale-95 transform transition-transform rounded-lg"
          >
            Todo app with database
          </a>
        </div>
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
        <div className="mx-10 my-3">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/Mo4a4os/simple-todo-app"
            className="p-3 inline-block bg-white text-black hover:scale-95 transform transition-transform rounded-lg"
          >
            Todo приложение с базой данных
          </a>
        </div>
      </div>
    );
  }
};
