import { NavLink, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  if (location.pathname === "/") return;

  return (
    <header className="bg-pink-400 h-20 flex items-center gap-10 px-2.5 text-xl mb-5">
      <NavLink
        to="/profile"
        className={({ isActive }) =>
          `${isActive ? "text-pink-950 font-bold underline" : "hover:text-pink-900"}`
        }
      >
        Profile
      </NavLink>
      <NavLink
        to="/education"
        className={({ isActive }) =>
          `${isActive ? "text-pink-950 font-bold underline" : "hover:text-pink-900"}`
        }
      >
        Education
      </NavLink>
      <NavLink
        to="/skills"
        className={({ isActive }) =>
          `${isActive ? "text-pink-950 font-bold underline" : "hover:text-pink-900"}`
        }
      >
        Skills
      </NavLink>
      <NavLink
        to="/experience"
        className={({ isActive }) =>
          `${isActive ? "text-pink-950 font-bold underline" : "hover:text-pink-900"}`
        }
      >
        Work Experience
      </NavLink>
    </header>
  );
}

export default Header;
