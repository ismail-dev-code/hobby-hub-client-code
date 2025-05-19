
import Navbar from '../pages/Navbar';
import { Outlet } from 'react-router';
import Footer from '../pages/Footer';

const HomeLayout = () => {
    return (
        <>
            <header>
            <Navbar></Navbar>
            </header>
            <main className='lg:w-11/12 min-h-[calc(100vh-370px)] lg:mx-auto'>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </>
    );
};

export default HomeLayout;