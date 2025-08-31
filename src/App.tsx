import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import RoutesComp from "./routes/RoutesComp";
import { Navbar } from "./components/Navbar";
import { LanguageContext } from "./components/LanguageContext";

function App() {
  const lang = localStorage.getItem("lang") || "ru";
  const [language, setLanguage] = useState(lang);
  useEffect(() => {
    console.log(language);
  }, [language]);
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <div className="px-28 font-mono dark text-3xl lg:text-2xl">
        <BrowserRouter>
          {/*<Link className="inline-block mx-6 transform transition-transform duration-200 hover:scale-125" to="/">Главная</Link>
          <Link className="inline-block mx-6 transform transition-transform duration-200 hover:scale-125" to="/projects">Проекты</Link>*/}
          <Navbar />
          <RoutesComp />

          <div className="border-t mt-12 border-t-gray-800">
            <nav className="my-8 flex justify-between mx-52">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/Mo4a4os"
              >
                Github
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://t.me/bruh72"
              >
                Telegram
              </a>
            </nav>
          </div>
        </BrowserRouter>
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
