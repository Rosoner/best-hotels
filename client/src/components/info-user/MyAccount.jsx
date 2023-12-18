
import AuthContext from '../../contexts/authContext';
import { useContext, useState } from "react";

import UserInfoModal from "../user-info/UserInfoModal.jsx";



export default function MyAccount() {

    const [showInfo, setShowInfo] = useState(false);

    const {
        isAuthenticated,

    } = useContext(AuthContext);

    const infoClickHandler = () => {
        setShowInfo(true);
    };


    return (
        <section id="info-page" className="auth-info" >

            <section>                    
                <section >
                    <div>
                        {showInfo && (
                            <UserInfoModal
                                onClose={() => setShowInfo(false)}
                            />
                        )}

                        <div className="slogan-user">
                            <h2 style={{ color: 'yellow', }}>User info:</h2>
                        </div>

                        {isAuthenticated && (
                            <div id="user">

                                <br></br>
                                <br></br>
                                <span style={{ color: 'yellow', }}>
                                    You can create your own publication with your favourite hotel in this blog!
                                    Also is possible to edit or delete your post in case that you are logged in.
                                    Is allowed on all users to write comments about their posts or another posts.
                                    All guests can only read publications and comments.
                                    <br></br>
                                    <br></br>
                                    Please click button bellow for user details info.
                                </span>                           
                            </div>
                        )}

                    </div>
                    <br></br>

                    <div className='info-user'>
                        <button className="btn info-btn" title="See more info for your account" onClick={infoClickHandler}>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user details"
                                className="svg-inline--fa fa-info" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="-150 0 512 612">
                                <path fill="currentColor"
                                    d="M160 448h-32V224c0-17.69-14.33-32-32-32L32 192c-17.67 0-32 14.31-32 32s14.33 31.1 32 31.1h32v192H32c-17.67 0-32 14.31-32 32s14.33 32 32 32h128c17.67 0 32-14.31 32-32S177.7 448 160 448zM96 128c26.51 0 48-21.49 48-48S122.5 32.01 96 32.01s-48 21.49-48 48S69.49 128 96 128z">
                                </path>
                            </svg>

                        </button>
                    </div>
            </section>
            </section>
        </section>

    );
}
