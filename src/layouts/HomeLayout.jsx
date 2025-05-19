
import Navbar from '../pages/Navbar';
import { Outlet } from 'react-router';
import Footer from '../pages/Footer';

const HomeLayout = () => {
    return (
        <>
            <header>
            <Navbar></Navbar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </>
    );
};

export default HomeLayout;