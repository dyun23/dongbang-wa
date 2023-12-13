import React from 'react';
import UnionClub from './UnionClub';
import SchoolClub from './SchoolClub';

const ClubListMain = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            <UnionClub size={true}/>
            <SchoolClub size={true}/>
        </div>
    );
};

export default ClubListMain;