import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/authContext';

export default function Header() {
    const {
        username,
        isAuthenticated,
        
    } = useContext(AuthContext);

   //

    // const UserListItem = ({
    //     userId,
    //     firstName,
    //     lastName,
    //     email,
    //     phoneNumber,
    //     createdAt,
    //     imageUrl,
    //     onInfoClick,
    //     onDeleteClick,
    // }) => {
    //     const infoClickHandler = () => {
    //         onInfoClick(userId);
    //     };

        // const deleteClickHandler = () => {
        //     onDeleteClick(userId);
        // };

    //

    return (
        <header>
            <h1><Link className="home" to="/">Best Hotels</Link></h1>
            <nav>
                <Link to="/hotels">Catalog</Link>
                {isAuthenticated && (
                    <div id="user">
                        <Link to="/hotels/create">New hotel</Link>
                        <Link to="/logout">Logout</Link>
                        {/* <span style={{ color: 'yellow',}}>| Logged in: {username} |</span> */}
                        <Link to="/myaccount"><span style={{ color: 'yellow',}}>| Info user: {username} |</span></Link>

                        {/* <button className="btn info-btn" title="Info" onClick={infoClickHandler}>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="info"
                                className="svg-inline--fa fa-info" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="-150 0 512 612">
                                <path fill="currentColor"
                                    d="M160 448h-32V224c0-17.69-14.33-32-32-32L32 192c-17.67 0-32 14.31-32 32s14.33 31.1 32 31.1h32v192H32c-17.67 0-32 14.31-32 32s14.33 32 32 32h128c17.67 0 32-14.31 32-32S177.7 448 160 448zM96 128c26.51 0 48-21.49 48-48S122.5 32.01 96 32.01s-48 21.49-48 48S69.49 128 96 128z">
                                </path>
                            </svg>
                        </button> */}

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

