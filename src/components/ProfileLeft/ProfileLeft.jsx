import React from 'react';
import FollowresCard from '../FolloweresCard/FollowresCard';
import InfoCard from '../InfoCard/InfoCard';
import LogoSearch from '../LogoSearch/LogoSearch';

const ProfileLeft = () => {
    return (
        <div className='ProfileSide'>
            <LogoSearch />
            <InfoCard />
            <FollowresCard></FollowresCard>
        </div>
    );
};

export default ProfileLeft;