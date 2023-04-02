import { Outlet } from "react-router-dom";
import { Navigation } from "../Navigation";

export default function Root() {
  return (
    <div className="container">
      <h1>Lenny's Site</h1>
      <Navigation />
      <Outlet />
      <footer>&copy; 2023</footer>
    </div>
  );
}
