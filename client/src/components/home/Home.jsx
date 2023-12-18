import AuthContext from '../../contexts/authContext';
import { useContext } from 'react';

export default function Home() {
    
        const {
            username,
            isAuthenticated,
            
        } = useContext(AuthContext);
    
    
    
    return (
        <section id="homepage">
           
            <section id="welcome-world">

                <div className="welcome-message">
                    <div className="slogan">
                        <h2>Best hotels blog is here !</h2>
                        {isAuthenticated && (
                        <h2 style={{ color: 'yellow', fontSize: 22}}>Hello, {username}! 
                            Welcome to a world of Best hotels. </h2>
                            // Explore our selection of hotels and create post with your own!
                        )}                        
                    </div>
                </div>
                <img src="../images/hotel_3.png" alt="hotel" />
            <div>
                {/* <div id="home-img">
                    <img src="../images/Hotel_1.png" alt="hotel" />
                </div> */}
                
            </div>

            </section>

        </section>

    );
}
