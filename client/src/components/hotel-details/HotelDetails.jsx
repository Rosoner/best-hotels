import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


import * as hotelService from '../../services/hotelService';
import * as commentService from '../../services/commentService';
import AuthContext from "../../contexts/authContext";
import CommentModal from "./comment-modal/CommentModal.jsx";
// import newComment from "./comment-modal"



export default function HotelDetails() {
    const navigate = useNavigate();
    const { username, userId, isAuthenticated} = useContext(AuthContext);
    const [hotel, setHotel] = useState({});
    const [comments, setComments] = useState([]);
    const { hotelId } = useParams();

    // console.log(_id)
    // console.log(hotel._ownerId)
    const [showInfo, setShowInfo] = useState(false);

    const infoClickHandler = () => {
        setShowInfo(true);
    };
    const hideCommentModal = () => {
        setShowInfo(false);
    };

    useEffect(() => {
        hotelService.getOne(hotelId)
            .then(setHotel);

            commentService.getAll(hotelId)
            .then(setComments);

    }, [hotelId]);

    const addCommentHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const newComment = await commentService.create(
            hotelId,
            formData.get('comment')
        );

        newComment.owner = { username };

        setComments(state => [...state, { ...newComment, owner: { username } }]);

        setShowInfo(false);
    }

   

    const deleteButtonClickHandler = async () => {
        const hasConfirmed = confirm(`Are you sure you want to delete hotel: ${hotel.name}`);

        if (hasConfirmed) {
            await hotelService.remove(hotelId);

            navigate('/hotels');
        }
    }

    return (
        <section id="hotel-details">

            {showInfo && (
                <CommentModal
                    // addCommentHandler={() => setComments}
                    // onClose={() => hideCommentModal}
                    onClose={hideCommentModal}
                    onCreate={addCommentHandler}
                // addCommentHandler ={() => setComments(state => [...state])}

                />
            )}

            <h1>Hotel Details</h1>

            <div className="info-section">
                <div className="hotel-header">

                    <img className="hotel-img" src={hotel.imageUrl} alt={hotel.name} />

                    <h1 id="title">{hotel.name}</h1>

                    <h5>{hotel.location}</h5>
                    {/* <div id="official-site">
                        <Link to={hotel.link} style={{ color: '#395f47', fontSize:12}}>To visit official web site <span style={{ color: 'darkblue', fontSize:12}}>click here</span></Link>
                    </div>  */}
                    <div id="official-site">
                        <Link to={hotel.link} style={{ color: '#395f47', fontSize:12}}>Official web site</Link>
                    </div> 
                    

                    {/* <Link to={hotel.link}>
                        <img className="hotel-img" src={hotel.imageUrl} alt={hotel.name}
                        title="Go to web site" />
                    </Link> */}

                    <div className="logo-details">
                        <img src="../images/hotel_icon_1.png" alt="hero"/>
                    </div>

                    
                                    
                    <p className="type">{hotel.description}</p>
                                                           
                    <div className="levels">
                        <span style={{ color: 'darkred',}}> Facilities: </span>
                        <span>{hotel.facilities}</span>
                    </div>

                    {userId === hotel._ownerId && isAuthenticated && (
                        <div className="buttons">
                            <Link to={`/hotels/${hotelId}/edit`} className="button-edit" title="Click here to edit your post">Edit</Link>
                            <button className="button" title="Click here to delete your post" onClick={deleteButtonClickHandler}>Delete</button> 
                        </div>                                                
                    )}    


                    {isAuthenticated && (
                        <div className='info'>
                            <button className="btn info-btn" title="Click here to add new comment" onClick={infoClickHandler}>
                                {/* <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user details"
                                    className="svg-inline--fa fa-info" role="img" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="-150 0 512 612">
                                    <path fill="currentColor"
                                        d="M160 448h-32V224c0-17.69-14.33-32-32-32L32 192c-17.67 0-32 14.31-32 32s14.33 31.1 32 31.1h32v192H32c-17.67 0-32 14.31-32 32s14.33 32 32 32h128c17.67 0 32-14.31 32-32S177.7 448 160 448zM96 128c26.51 0 48-21.49 48-48S122.5 32.01 96 32.01s-48 21.49-48 48S69.49 128 96 128z">
                                    </path>
                                </svg> */}
                                Add comment
                            </button>
                        </div> 
                    )}                                         

                </div>


                {/* comments */}

                <div className="details-comments">
                    <div id='header-comment'>Comments:</div>
                    <ul>
                        {comments.map(({ _id, text, owner: { username } }) => (
                            <li key={_id} className="comment">
                                <p>{username}: {text}</p>
                            </li>
                        ))}
                    </ul>

                    {comments.length === 0 && (
                        <p className="no-comment">No comments yet.</p>
                    )}
                </div>

                {/* {userId === hotel._ownerId && isAuthenticated && (
                <div className="buttons">
                    <Link to={`/hotels/${hotelId}/edit`} className="button">Edit</Link>
                    <button className="button" onClick={deleteButtonClickHandler}>Delete</button>
                    
                </div>
                )} */}
                
            </div>

            {/* <article className="create-comment">
                <label>Add new comment:</label>

                <form className="form" onSubmit={addCommentHandler}>
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input id="btn-submit" type="submit" value="Add Comment" />
                </form>
            </article> */}


        </section>
    );
}