import HomePage from "./components/home/HomePage";
import AboutUs from "./components/about us/AboutUs";
import ContactUs from "./components/contact us/ContactUs";
import Offerings from "./components/offerings/Offerings";

export const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/aboutus", element: <AboutUs /> },
  { path: "/offerings", element: <Offerings /> },
  { path: "/contactus", element: <ContactUs /> },
];
