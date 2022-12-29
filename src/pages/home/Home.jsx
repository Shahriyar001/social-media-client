import React from 'react';
import PostSide from '../../components/PostSIde/PostSide';
import ProfileSide from '../../components/ProfileSide/ProfileSide';
import RIghtSide from '../../components/RightSIde/RIghtSide';
import './Home.css'

const Home = () => {
    return (
        <div className='Home'>
            <ProfileSide />
            <PostSide />
            <RIghtSide />
        </div>
    );
};

export default Home;