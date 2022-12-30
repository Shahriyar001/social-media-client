import React from 'react';
import './RightSide.css';
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import TrendCard from '../TrendCard/TrendCard';
// import { FaKey, FaKeybase } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';


const RIghtSide = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }
    return (
        <div className='RightSide'>
            <div className="navIcons">
                <Link to="/"><img src={Home} alt="" /></Link>
                <UilSetting />
                <img src={Noti} alt="" />
                <img src={Comment} alt="" />
                {user?.uid ? <button onClick={handleLogOut}>Signout</button> : <Link to="/login">Login</Link>}
            </div>
            <TrendCard />

            <button className="button r-button" >
                Share
            </button>
            {/* <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} /> */}
        </div>
    );
};

export default RIghtSide;