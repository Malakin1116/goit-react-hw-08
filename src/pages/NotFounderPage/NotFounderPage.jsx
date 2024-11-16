import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <h1>Page Not Found</h1>
      <p>The page</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
}
