import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../components/LanguageContext";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
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
          <Dialog>
            <DialogTrigger>
              <p className="p-3 inline-block bg-white text-black hover:scale-95 transform transition-transform rounded-lg">
                Simple Todo App with Database
              </p>
            </DialogTrigger>
            <DialogContent className="dark sticky scale-125 md:scale-100">
              <DialogHeader>
                <DialogTitle>Simple Todo App with Database</DialogTitle>
                <DialogDescription>
                  Kinda simple todo app with MongoDB database. You can add,
                  delete and edit tasks. You can also mark tasks as completed.
                  The app is built with React, Tailwind CSS, Node.js, Express
                </DialogDescription>
                <img src="/images/image.png" alt="" />
              </DialogHeader>
              <DialogFooter>
                <Button className="cursor-pointer">
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://github.com/Mo4a4os/simple-todo-app"
                  >
                    Github Source Code
                  </a>
                </Button>
                <Button className="cursor-pointer">
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://simple-todo-app-1.onrender.com"
                  >
                    Visit Website
                  </a>
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
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
          <Dialog>
            <DialogTrigger>
              <p className="p-3 inline-block bg-white text-black hover:scale-95 transform transition-transform rounded-lg">
                Simple Todo App with Database
              </p>
            </DialogTrigger>
            <DialogContent className="dark sticky scale-125 md:scale-100">
              <DialogHeader>
                <DialogTitle>Simple Todo App with Database</DialogTitle>
                <DialogDescription>
                  Kinda simple todo app with MongoDB database. You can add,
                  delete and edit tasks. You can also mark tasks as completed.
                  The app is built with React, Tailwind CSS, Node.js, Express
                </DialogDescription>
                <img src="/images/image.png" alt="" />
              </DialogHeader>
              <DialogFooter>
                <Button className="cursor-pointer">
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://github.com/Mo4a4os/simple-todo-app"
                  >
                    Github Source Code
                  </a>
                </Button>
                <Button className="cursor-pointer">
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://simple-todo-app-1.onrender.com"
                  >
                    Visit Website
                  </a>
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    );
  }
};
