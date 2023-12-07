// import { useState, useEffect } from "react";
import AuthContext from '../../contexts/authContext';
import {  useContext } from "react";
import { formatDate } from "../../utils/dataUtils.js";

// import * as userService from '../services/userService';
// import { formatDate } from "../utils/dataUtils";


const UserInfoModal = ({
    onClose,
}) => {

    const {
        createdAt,
        userId,
        // _createdOn,
        email,
        username,
        // isAuthenticated,
        
    } = useContext(AuthContext);


    return (
        <div className="overlay">
            <div className="backdrop" onClick={onClose}></div>
            <div className="modal-user-details">
                <div className="detail-container">
                    <header className="headers-info">
                        <h2>User Details:</h2>
                        <button className="btn close" onClick={onClose}>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark"
                                className="svg-inline--fa fa-xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path fill="currentColor"
                                    d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z">
                                </path>
                            </svg>
                        </button>
                    </header>
                    <div className="content">
                        {/* <div className="image-container">
                            <img src={user.imageUrl} alt={user.firstName} className="image" />
                        </div> */}
                        <div className="brand-logo"></div>
                        <div className="user-details">
                            <p style={{ color: 'darkblue',}}>User Id: <strong>{userId}</strong></p>
                            <p style={{ color: 'darkred',}}>
                                User Name:
                                <strong> {username} </strong>
                            </p >
                            <p style={{ color: 'darkorange',}}>
                                Email: <strong>{email}</strong></p>
                            {/* <p>Phone Number: <strong>{user.phoneNumber}</strong></p> */}
                            {/* <p>
                                Address:
                                <strong> {user.address?.country}, {user.address?.city}, {user.address?.street} {user.address?.streetNumber} </strong>
                            </p> */}

                            {/* <p>Created on: <strong>{formatDate({createdAt})}</strong></p> */}
                            <p style={{ color: 'dark',}}>Created on: <strong>{formatDate({createdAt})}</strong></p>
                            {/* <p>Modified on: <strong>{formatDate(user.updatedAt)}</strong></p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserInfoModal;
