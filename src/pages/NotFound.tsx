
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-zoezi-purple">404</h1>
        <p className="text-xl text-gray-300 mb-6">Oops! Page not found</p>
        <a href="/" className="btn-primary">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
