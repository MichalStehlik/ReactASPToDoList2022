import {Outlet, Link, useNavigate} from "react-router-dom";
import {useAuthContext} from "../../providers/AuthProvider"

export const FrontLayout = () => {
    const [{accessToken}, dispatch] = useAuthContext();
    return(
        <>
            <menu>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/users">Users</Link></li>
                {accessToken 
                ? 
                    <li><Link to="/sign/out">Out</Link></li>
                :
                    <li><Link to="/sign/in">In</Link></li>
                }
            </menu>
            <main>
                <Outlet />
            </main>
        </>
    );
} 