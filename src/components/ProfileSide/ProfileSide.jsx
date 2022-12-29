import React from 'react';
import FollowresCard from '../FolloweresCard/FollowresCard';
import LogoSearch from '../LogoSearch/LogoSearch';
import ProfileCard from '../ProfileCard/ProfileCard';
import './ProfileSide.css'
const ProfileSide = () => {
    return (
        <div className='ProfileSide'>
            <LogoSearch />
            <ProfileCard />
            <FollowresCard />
        </div>
    );
};

export default ProfileSide;