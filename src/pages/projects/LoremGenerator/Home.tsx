import { NavLink } from "react-router-dom";
export const Home = () => {
  return (
    <div>
      <nav className="flex justify-between mx-40 my-10">
        <NavLink className={({ isActive }) =>
            `inline-block mx-6 transform transition-transform duration-200 hover:scale-125 ${
              isActive ? "underline font-semibold" : "text-gray-500"
            }`
          } to="/projects/small/loremgenerator/home">Home</NavLink>
        <NavLink className={({ isActive }) =>
            `inline-block mx-6 transform transition-transform duration-200 hover:scale-125 ${
              isActive ? "underline font-semibold" : "text-gray-500"
            }`
          } to="/projects/small/loremgenerator/words">Words</NavLink>
        <NavLink className={({ isActive }) =>
            `inline-block mx-6 transform transition-transform duration-200 hover:scale-125 ${
              isActive ? "underline font-semibold" : "text-gray-500"
            }`
          } to="/projects/small/loremgenerator/sentences">Sentences</NavLink>
        <NavLink className={({ isActive }) =>
            `inline-block mx-6 transform transition-transform duration-200 hover:scale-125 ${
              isActive ? "underline font-semibold" : "text-gray-500"
            }`
          } to="/projects/small/loremgenerator/paragraphs">Paragraphs</NavLink>
      </nav>
      lorem ipsum generator v0.1
    </div>
  );
};
