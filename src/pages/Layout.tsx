import { Outlet, Link } from "react-router-dom";
import './dataStyle.css';

const Layout = () => {
    return (
        <>
            <nav>
                <ul className="navHorizontal">
                    <li>
                        <Link className='navLink' to="/">Buses </Link>
                    </li>
                    <li>
                        <Link className='navLink' to="/history">History</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </>
    )
};

export default Layout;