import { Outlet, Link } from "react-router-dom";
import '../dataStyle.css';

const Layout = () => {
    return (
        <>
            <nav id="menu">
                <ul>
                    <li>
                        <Link to="/">Buses </Link>
                    </li>
                    <li>
                        <Link to="/history">History</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;