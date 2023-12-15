import React from 'react';
import * as Components from '../Components';
import 'react-slideshow-image/dist/styles.css'
import slide1 from '../img/slide1.png';
import slide2 from '../img/slide2.png';
import { useNavigate } from 'react-router-dom';

const SchoolClub = (props) => {
    const slideshowImg = [slide1, slide2];
    const clubList = [{img: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?q=80&w=2058&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "사진동아리",info:"SEPE 신입생 모집"},
    {img: "https://images.unsplash.com/photo-1548123378-bde4eca81d2d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "댄스 동아리",info:"신바람 2023년 신입생 공고"},
    {img: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?q=80&w=2058&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "사진동아리",info:"SEPE 신입생 모집"},
    {img: "https://images.unsplash.com/photo-1548123378-bde4eca81d2d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "댄스 동아리",info:"신바람 2023년 신입생 공고"}]
    
    const navigate = useNavigate();

    const navigatePage = () => {
        navigate('/Main/SchoolClub');
    }

    return (
        <Components.Group size = {props.size}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <Components.Title>교내 동아리</Components.Title>
                {props.size && <Components.MoreButton onClick={navigatePage}>더보기 <span className="arrow">&rarr;</span></Components.MoreButton>}
            </div>
            <Components.Slider>
            {slideshowImg.map((data, index) => (
                        <Components.SlideShow  size = {props.size} key={index} style={{backgroundImage:`url(${data})`}}/>
                ))}
            </Components.Slider>
            <Components.Line/>
            <Components.Title>모집 동아리</Components.Title>
            <Components.ClubList>
                {clubList.slice(0, props.size ? 6 : clubList.length).map((club) => (
                    <Components.Club size = {props.size}>
                        <Components.ClubImg src={club.img}/>
                        <Components.ClubTitle size = {props.size}>{club.title}</Components.ClubTitle>
                        <Components.ClubInfo size = {props.size}>{club.info}</Components.ClubInfo>
                    </Components.Club>
                ))}
            </Components.ClubList>
        </Components.Group>
    );
};

export default SchoolClub;