import React from 'react';
import CalendarMain from './Calendar/CalendarMain';
import CommunityMain from './Community/CommunityMain'
import * as Components from './Components';
import { useLocation } from 'react-router-dom';

const ClubMain = () => {
    const location = useLocation();
    const clubName = location.state?.clubName;
    return (
        <>
        <Components.Title style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '2%', marginBottom: '0'}}>{clubName}</Components.Title>
        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            <CalendarMain size = {true}/>
            <CommunityMain size = {true}/>
        </div>
        </>
    );
};

export default ClubMain;