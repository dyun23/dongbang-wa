import React from 'react';
import NaviBar from './NaviBar';
import ClubListMain from "./ClubList/ClubListMain";
import CalendarMain from "./Calendar/CalendarMain";
import CommunityMain from "./Community/CommunityMain";
import { Route, Routes, Navigate } from "react-router-dom";
import UnionClub from './ClubList/UnionClub';
import SchoolClub from './ClubList/SchoolClub';

const Main = () => {
    return (
        <div>
            <NaviBar/>
            <Routes>
                <Route path="/" element={<Navigate to="ClubList" replace />} />
                <Route path="/ClubList" element={<ClubListMain/>}/>
                <Route path="/UnionClub" element={<UnionClub size={false}/>}/>
                <Route path="/SchoolClub" element={<SchoolClub size={false}/>}/>
                <Route path="/Calendar" element={<CalendarMain/>}/>
                <Route path="/Community" element={<CommunityMain/>}/>
                
            </Routes>
        </div>
    );
};

export default Main;