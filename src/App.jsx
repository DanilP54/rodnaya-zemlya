import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import { Header } from "./components/header/header";
import { NavigationMenu } from "./components/navigation-menu/NavigationMenu";
import { useState } from "react";

function getHeader(path) {
  const pathes = {
    "/app": true,
    "/app/turquoise-movie": true,
    "/app/green-movie": true,
    "/app/red-movie": true,
    "/app/turquoise-music": true,
    "/app/green-music": true,
    "/app/red-music": true,
    "/app/turquoise-art": true,
    "/app/green-art": true,
    "/app/red-art": true,
    "/app/turquoise-literature": true,
    "/app/green-literature": true,
    "/app/red-literature": true,
  };

  return pathes[path];
}

function App() {
  const [state, setState] = useState();
  const { pathname } = useLocation();

  console.log(pathname);

  return (
    <>
      {getHeader(pathname) && (
        <div>
          <Header />
          <NavigationMenu />
        </div>
      )}
      <Outlet />
    </>
  );
}

export default App;
