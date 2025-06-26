import Navbar from "../pages/Navbar";
import { Outlet } from "react-router";
import Footer from "../pages/Footer";
import Slider from "../components/home/Slider";

const HomeLayout = () => {
  return (
    <>
      <Navbar></Navbar>

      <Outlet></Outlet>

      <Footer></Footer>
    </>
  );
};

export default HomeLayout;
