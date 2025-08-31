import React from 'react'
import { NoRoute } from "../pages/NoRoute";
import { SmallProjects } from "../pages/SmallProjects";
import { RealProjects } from "../pages/RealProjects";
import { RandomNumberGenerator } from "../pages/projects/Random-number-generator";
import { CountdownTimer } from "../pages/projects/CountdownTimer";
import { Home } from "../pages/projects/LoremGenerator/Home";
import { Words } from "../pages/projects/LoremGenerator/Words";
import { Sentences } from "../pages/projects/LoremGenerator/Sentences";
import { Paragraphs } from "../pages/projects/LoremGenerator/Paragraphs";
import { Calculator } from "../pages/projects/Calculator";
import { TodoListComp } from "../pages/projects/TodoList/components/TodoListComp";
import { Main } from "../pages/Main";
import { Projects } from "../pages/Projects";
import { Route, Routes } from 'react-router-dom';
import Figma1 from '@/pages/projects/Figma1';
const RoutesComp = () => {
    {/*<Route element={< />} path="/" />*/}
  return (
    <div><Routes>
    <Route element={<Main />} path="/" />
    <Route element={<Projects />} path="/projects" />
    <Route path="*" element={<NoRoute />} />
    <Route path="/projects/small" element={<SmallProjects />} />
    <Route path="/projects/real" element={<RealProjects />} />
    <Route
      path="/projects/small/random"
      element={<RandomNumberGenerator />}
    />
    <Route
      path="/projects/small/countdown"
      element={<CountdownTimer />}
    />

    <Route
      path="/projects/small/loremgenerator/home"
      element={<Home />}
    />
    <Route
      path="/projects/small/loremgenerator/words"
      element={<Words />}
    />
    <Route
      path="/projects/small/loremgenerator/sentences"
      element={<Sentences />}
    />
    <Route
      path="/projects/small/loremgenerator/paragraphs"
      element={<Paragraphs />}
    />
    <Route path="/projects/small/calculator" element={<Calculator />} />
    <Route path="/projects/small/todo" element={<TodoListComp />} />
    <Route element={<Figma1 />} path="/projects/small/figma-1" />
  </Routes></div>
  )
}

export default RoutesComp