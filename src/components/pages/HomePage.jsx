import { Outlet } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>Trending today</h1>

      <Outlet />
    </div>
  );
}
