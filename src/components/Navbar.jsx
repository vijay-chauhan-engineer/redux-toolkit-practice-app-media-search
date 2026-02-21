import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent tracking-wide"
        >
          MediaSearch
        </Link>

        {/* Nav Buttons */}
        <div className="flex items-center gap-3">

          <Link
            to="/"
            className={`px-5 py-2 rounded-lg text-sm sm:text-base font-medium transition ${
              location.pathname === "/"
                ? "bg-blue-600 text-white shadow-md"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            Search
          </Link>

          <Link
            to="/collection"
            className={`px-5 py-2 rounded-lg text-sm sm:text-base font-medium transition ${
              location.pathname === "/collection"
                ? "bg-blue-600 text-white shadow-md"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            Collection
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;