import React from 'react';
import * as Components from '../Components';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import slide1 from '../img/slide1.png';

const UnionClub = (props) => {
    const slideshowImg = [slide1];
    const clubList = [{img: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?q=80&w=2058&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "사진동아리",info:"SEPE 신입생 모집"},
    {img: "https://images.unsplash.com/photo-1548123378-bde4eca81d2d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "댄스 동아리",info:"신바람 2023년 신입생 공고"},{img: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?q=80&w=2058&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "사진동아리",info:"SEPE 신입생 모집"},
    {img: "https://images.unsplash.com/photo-1548123378-bde4eca81d2d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "댄스 동아리",info:"신바람 2023년 신입생 공고"},]
    return (
        <Components.Group size = {props.size}>
            <Components.Title>연합동아리</Components.Title>
            {/* <Slide> */}
            {slideshowImg.map((data, index) => (
                        <Components.SlideShow key={index} style={{backgroundImage:`url(${data})`}}/>
                ))}
                {/* </Slide> */}
            <Components.Title>모집 동아리</Components.Title>
            <Components.ClubList>
                {clubList.map((club) => (
                    <Components.Club>
                    <Components.ClubImg src={club.img}/>
                    <Components.ClubTitle>{club.title}</Components.ClubTitle>
                    <Components.ClubInfo>{club.info}</Components.ClubInfo>
                </Components.Club>
                ))}
            </Components.ClubList>
        </Components.Group>
    );
};

export default UnionClub;