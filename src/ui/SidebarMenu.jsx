import { AiOutlineAppstore } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdOutlineComputer, MdSchool, MdWorkOutline } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";

const navLinks = [
  {
    name: "Profile",
    href: "/profile",
    icon: <CgProfile className="h-5 w-5" />,
  },
  {
    name: "Education",
    href: "/education",
    icon: <MdSchool className="h-5 w-5" />,
  },
  {
    name: "Skills",
    href: "/skills",
    icon: <MdOutlineComputer className="h-5 w-5" />,
  },
  {
    name: "Work Experience",
    href: "/experience",
    icon: <MdWorkOutline className="h-5 w-5" />,
  },
  {
    name: "Projects",
    href: "/projects",
    icon: <AiOutlineAppstore className="h-5 w-5" />,
  },
];

function SidebarMenu() {
  const location = useLocation();

  if (location.pathname === "/") return;

  return (
    <nav className=" bg-pink-50">
      <ul className="flex flex-col gap-2 text-lg h-full">
        {navLinks.map((link) => (
          <li key={link.name}>
            <NavLink
              to={link.href}
              className={({ isActive }) =>
                `${isActive ? "text-pink-950 font-bold bg-pink-200" : "hover:text-pink-900"} 
              py-3 px-5 text-pink-700 transition-colors flex items-center gap-4 font-semibold`
              }
            >
              {link.icon}
              <span>{link.name}</span>
            </NavLink>
          </li>
        ))}

        <li className="mt-auto">
          <span className="flex justify-center">
            {new Date().getFullYear()} &copy; Jessica Franke{" "}
          </span>
        </li>
      </ul>
    </nav>
  );
}

export default SidebarMenu;
