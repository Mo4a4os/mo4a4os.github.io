import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import { Main } from "./pages/Main";
import { Projects } from "./pages/Projects";
import { Navbar } from "./components/Navbar";
import { LanguageContext } from "./components/LanguageContext";
import { NoRoute } from "./pages/NoRoute";
import { SmallProjects } from "./pages/SmallProjects";
import { RealProjects } from "./pages/RealProjects";
import { RandomNumberGenerator } from "./pages/projects/Random-number-generator";
import { CountdownTimer } from "./pages/projects/CountdownTimer";
import { Home } from "./pages/projects/LoremGenerator/Home";
import { Words } from "./pages/projects/LoremGenerator/Words";
import { Sentences } from "./pages/projects/LoremGenerator/Sentences";
import { Paragraphs } from "./pages/projects/LoremGenerator/Paragraphs";
import {Calculator} from "./pages/projects/Calculator";
import { TodoListComp } from "./pages/projects/TodoList/components/TodoListComp";

function App() {
  const lang = localStorage.getItem("lang") || "ru";
  const [language, setLanguage] = useState(lang);
  useEffect(() => {
    console.log(language);
  }, [language]);
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <div className="px-28 dark text-3xl lg:text-2xl">
        <BrowserRouter>
          {/*<Link className="inline-block mx-6 transform transition-transform duration-200 hover:scale-125" to="/">Главная</Link>
          <Link className="inline-block mx-6 transform transition-transform duration-200 hover:scale-125" to="/projects">Проекты</Link>*/}
          <Navbar />

          <Routes>
            <Route element={<Main />} path="/" />
            <Route element={<Projects />} path="/projects" />
            <Route path="*" element={<NoRoute />} />
            <Route path="/projects/small" element={<SmallProjects />} />
            <Route path="/projects/real" element={<RealProjects />} />
            <Route path="/projects/small/random" element={<RandomNumberGenerator />} />
             <Route path="/projects/small/countdown" element={<CountdownTimer />} />
             
              <Route path="/projects/small/loremgenerator/home" element={<Home />} />
          <Route path="/projects/small/loremgenerator/words" element={<Words />} />
          <Route path="/projects/small/loremgenerator/sentences" element={<Sentences />} />
          <Route path="/projects/small/loremgenerator/paragraphs" element={<Paragraphs />} />
          <Route path="/projects/small/calculator" element={<Calculator />} />
          <Route path="/projects/small/todo" element={<TodoListComp />} />
          </Routes>
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
