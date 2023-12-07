import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/authContext';

export default function Header() {
    const {
        username,
        isAuthenticated,
        
    } = useContext(AuthContext);

 

    return (
        <header>
            <div className="logo">
                {/* <img src="../images/hotel_small.png" alt="hero" 
                 /> */}
                 <Link className="home" to="/">
                    <img src="../images/hotel_small.png" alt="logo"
                        title="Go to home page" />
                 </Link>
            </div>
            <h1><Link className="home" to="/">Best Hotels</Link></h1>
            <nav>
                <Link to="/hotels">Catalog</Link>
                {isAuthenticated && (
                    <div id="user">
                        <Link to="/hotels/create">New hotel</Link>
                        <Link to="/logout">Logout</Link>
                        {/* <span style={{ color: 'yellow',}}>| Logged in: {username} |</span> */}
                        <Link to="/myaccount"><span style={{ color: 'yellow',}}>| Info user: {username} |</span></Link>

                        

                    </div>
                )}

                {!isAuthenticated && (
                    <div id="guest">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>
                )}
            </nav>
        </header>
    );
}

