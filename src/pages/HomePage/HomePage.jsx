import { Outlet } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>Your Personal Contact Keeper</h1>

      <Outlet />
    </div>
  );
}
