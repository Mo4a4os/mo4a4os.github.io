import { Link } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../components/LanguageContext";
export const Main = () => {
  const { language } = useContext(LanguageContext);
  if (language === "ru") {
    return (
      <div className="p-8">
        <h1 className="text-center font-bold text-5xl mb-3">Привет! </h1>
        <h2 className="text-center mb-6">
          Меня зовут Гаяз и я Full Stack Developer
        </h2>
        <p className="mb-12 text-center  ">
          <Link
            className="border p-2 rounded-lg bg-white text-black hover:bg-gray-200 transition-colors duration-200"
            to="/projects"
          >
            Все мои проекты
          </Link>
        </p>
        <h2 className="my-8 font-semibold text-center">Мои навыки</h2>
        <div className="grid grid-flow-col grid-rows-3 text-center gap-4">
          <div className="flex flex-col items-center font-bold">
            HTML
            <img
              className="w-24 max-h-26 my-2"
              src="/images/HTML5_logo_and_wordmark.svg.png"
              alt="html"
            />
          </div>
          <div className="flex flex-col items-center font-bold">
            CSS
            <img
              className="w-24 max-h-24 my-2 "
              src="/images/CSS3_logo_and_wordmark.svg"
              alt="css"
            />
          </div>
          <div className="flex flex-col items-center font-bold">
            TailwindCSS
            <img
              className="w-24 my-2"
              src="/images/Tailwind_CSS_Logo.svg.png"
              alt="tailwind"
            />
          </div>
          <div className="flex flex-col items-center font-bold">
            JavaScript
            <img
              className="w-24 max-h-26 my-2"
              src="/images/Unofficial_JavaScript_logo_2.svg.png"
              alt="js"
            />
          </div>
          <div className="flex flex-col items-center font-bold">
            React
            <img
              className="w-24 max-h-26 my-2"
              src="/images/React-icon.svg.png"
              alt="react"
            />
          </div>
          <div className="flex flex-col items-center font-bold">
            NodeJS
            <img
              className="w-24 my-2"
              src="/images/Node.js_logo.svg.png"
              alt="node"
            />
          </div>
          <div className="flex flex-col items-center font-bold">
            TypeScript
            <img
              className="w-24 max-h-26 my-2"
              src="/images/Typescript.svg.png"
              alt="ts"
            />
          </div>
          <div className="flex flex-col items-center font-bold">
            ExpressJS
            <img
              className="w-24 max-h-26 my-2"
              src="/images/express-js.png"
              alt="express"
            />
          </div>
          <div className="flex flex-col items-center font-bold">
            Python
            <img
              className="w-24 max-h-26 my-2"
              src="/images/Python-logo-notext.svg.png"
              alt="python"
            />
          </div>
        </div>
        <h2 className="my-8 font-semibold text-center">Обо мне</h2>
        <p>
          Я Full Stack Developer, живу в Казани, Республика Татарстан. У меня
          маленький опыт, но я всегда стремлюсь к большему ❤️.{" "}
        </p>
      </div>
    );
  } else {
    return (
      <div className="p-8">
        <h1 className="text-center font-bold text-5xl mb-3">Hello! </h1>
        <h2 className="text-center mb-6">
         My name is Gayaz and I am a Full Stack Developer
        </h2>
        <p className="mb-12 text-center  ">
          <Link
            className="border p-2 rounded-lg bg-white text-black hover:bg-gray-200 transition-colors duration-200"
            to="/projects"
          >
            My Projects
          </Link>
        </p>
        <h2 className="my-8 font-semibold text-center">My skills</h2>
        <div className="grid grid-flow-col grid-rows-3 text-center gap-4">
          <div className="flex flex-col items-center font-bold">
            HTML
            <img
              className="w-24 max-h-26 my-2"
              src="/images/HTML5_logo_and_wordmark.svg.png"
              alt="html"
            />
          </div>
          <div className="flex flex-col items-center font-bold">
            CSS
            <img
              className="w-24 max-h-24 my-2 "
              src="/images/CSS3_logo_and_wordmark.svg"
              alt="css"
            />
          </div>
          <div className="flex flex-col items-center font-bold">
            TailwindCSS
            <img
              className="w-24 my-2"
              src="/images/Tailwind_CSS_Logo.svg.png"
              alt="tailwind"
            />
          </div>
          <div className="flex flex-col items-center font-bold">
            JavaScript
            <img
              className="w-24 max-h-26 my-2"
              src="/images/Unofficial_JavaScript_logo_2.svg.png"
              alt="js"
            />
          </div>
          <div className="flex flex-col items-center font-bold">
            React
            <img
              className="w-24 max-h-26 my-2"
              src="/images/React-icon.svg.png"
              alt="react"
            />
          </div>
          <div className="flex flex-col items-center font-bold">
            NodeJS
            <img
              className="w-24 my-2"
              src="/images/Node.js_logo.svg.png"
              alt="node"
            />
          </div>
          <div className="flex flex-col items-center font-bold">
            TypeScript
            <img
              className="w-24 max-h-26 my-2"
              src="/images/Typescript.svg.png"
              alt="ts"
            />
          </div>
          <div className="flex flex-col items-center font-bold">
            ExpressJS
            <img
              className="w-24 max-h-26 my-2"
              src="/images/express-js.png"
              alt="express"
            />
          </div>
          <div className="flex flex-col items-center font-bold">
            Python
            <img
              className="w-24 max-h-26 my-2"
              src="/images/Python-logo-notext.svg.png"
              alt="python"
            />
          </div>
        </div>
        <h2 className="my-8 font-semibold text-center">About me</h2>
        <p>
          I am a Full Stack Developer, I live in Kazan, Republic of Tatarstan. I have
          little experience, but I always strive for more ❤️.
        </p>
      </div>
    )
  }
};
