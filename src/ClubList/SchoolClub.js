import React from 'react';
import * as Components from '../Components';
import 'react-slideshow-image/dist/styles.css'
import slide2 from '../img/slide2.png';
import slide4 from '../img/slide4.jpg';
import slide5 from '../img/slide5.jpg';
import slide6 from '../img/slide6.jpg';
import { useNavigate } from 'react-router-dom';

const SchoolClub = (props) => {
    const slideshowImg = [slide2, slide4, slide5, slide6];
    const clubList = [{img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "코딩 동아리",info:"CodeLab 3기 모집"},
    {img: "https://images.unsplash.com/photo-1630609674924-1b381d09d313?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "친목 동아리",info:"Moments 신규 모집합니다"},
    {img: "https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "디자인 동아리",info:"컬러풀 드림즈 신규 모집"},
    {img: "https://images.unsplash.com/photo-1475440197469-e367ec8eeb19?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "스포츠 동아리",info:"HOMERUN 야구 보러 갈 사람 모여라"},
    {img: "https://images.unsplash.com/photo-1616680214084-22670de1bc82?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "봉사 동아리",info:"'순수' 하게 봉사할 신입생 모집"},
    {img: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "독서 동아리",info:"책장여행 부원 모집"},
    {img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "창업 동아리",info:"폴라리스 대환영"},
    {img: "https://images.unsplash.com/photo-1514050566906-8d077bae7046?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "스포츠 동아리",info:"KickHeroes 신입생 공고"},
    {img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "패션 동아리",info:"스타일리스트 동아리 모집"},
    {img: "https://images.unsplash.com/photo-1515669097368-22e68427d265?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "맛집 동아리",info:"Flavor과 함께해요"},
    {img: "https://images.unsplash.com/flagged/photo-1567116681178-c326fa4e2c8b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "봉사 동아리",info:"유사모 신규 모집"},
    {img: "https://images.unsplash.com/photo-1535525153412-5a42439a210d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "댄스 동아리",info:"FeelMyRhythm 6기 모집"},
    {img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "코딩 동아리",info:"CodeLab 3기 모집"},
    {img: "https://images.unsplash.com/photo-1630609674924-1b381d09d313?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "친목 동아리",info:"Moments 신규 모집합니다"},
    {img: "https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "디자인 동아리",info:"컬러풀 드림즈 신규 모집"},
    {img: "https://images.unsplash.com/photo-1475440197469-e367ec8eeb19?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "스포츠 동아리",info:"HOMERUN 야구 보러 갈 사람 모여라"},
    {img: "https://images.unsplash.com/photo-1616680214084-22670de1bc82?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "봉사 동아리",info:"'순수' 하게 봉사할 신입생 모집"},
    {img: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "독서 동아리",info:"책장여행 부원 모집"},
    {img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "창업 동아리",info:"폴라리스 대환영"},
    {img: "https://images.unsplash.com/photo-1514050566906-8d077bae7046?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "스포츠 동아리",info:"KickHeroes 신입생 공고"},
    {img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "패션 동아리",info:"스타일리스트 동아리 모집"},
    {img: "https://images.unsplash.com/photo-1515669097368-22e68427d265?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "맛집 동아리",info:"Flavor과 함께해요"},
    {img: "https://images.unsplash.com/flagged/photo-1567116681178-c326fa4e2c8b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "봉사 동아리",info:"유사모 신규 모집"},
    {img: "https://images.unsplash.com/photo-1535525153412-5a42439a210d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "댄스 동아리",info:"FeelMyRhythm 6기 모집"}]
    
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