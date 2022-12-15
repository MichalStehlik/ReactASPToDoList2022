import {Outlet, Link, useNavigate} from "react-router-dom";

export const UsersLayout = () => {
    return(
        <>
            <menu>
                <li><Link to="/">Home</Link></li>
            </menu>
            <main>
                <Outlet />
            </main>
        </>
    );
} 