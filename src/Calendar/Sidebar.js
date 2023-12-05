import React, { useState } from 'react';
import AddEvent from './EventModalPopUp';


//일정 추가 버튼
//항목별 일정 버튼
//동아리별 일정 버튼

const Sidebar=()=>{

    const [content, setContent]=useState();
    
    // const handleClickButton = e => {
    //     const { name } = e.target;
    //     setContent(name);
    // };

   
    return(
        <div style={{width: 30+"%", height: 300, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <AddEvent/>
            <button>항목별 일정</button>
            <button>동아리별 일정</button>
        </div>
    );
};

export default Sidebar;