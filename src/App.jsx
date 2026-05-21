import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Welcome from "./ui/Welcome";
import Profile from "./features/profile/Profile";
import Education from "./features/education/Education";
import Skills from "./features/skills/Skills";
import Experience from "./features/experience/Experience";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Welcome />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/education",
        element: <Education />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/experience",
        element: <Experience />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
