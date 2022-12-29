import React from 'react';
import PostSide from '../../components/PostSIde/PostSide';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft';
import RIghtSide from '../../components/RightSIde/RIghtSide';
import './Profile.css';

const Profile = () => {
    return (
        <div className='Profile'>
            <ProfileLeft />
            <div className='Profile-center'>
                <ProfileCard />
                <PostSide />
            </div>
            <RIghtSide />
        </div>
    );
};

export default Profile;