import React from 'react';
import * as Components from '../Components';
import 'react-slideshow-image/dist/styles.css'
import slide1 from '../img/slide1.png';
import slide3 from '../img/slide3.jpg';
import { useNavigate } from 'react-router-dom';

const UnionClub = (props) => {
    const slideshowImg = [slide1, slide3];
    const clubList = [{img: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?q=80&w=2058&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "사진 동아리",info:"SEPE 신입생 모집"},
    {img: "https://images.unsplash.com/photo-1548123378-bde4eca81d2d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "댄스 동아리",info:"신바람 2023년 신입생 공고"},
    {img: "https://images.unsplash.com/photo-1529422643029-d4585747aaf2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "스포츠 동아리",info:"사이클러 3기 동아리원 모집"},
    {img: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "등산 동아리",info:"PeakQuest와 함께하실 분"},
    {img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "글쓰기 동아리",info:"글잡이 동아리 모집"},
    {img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "요리 동아리",info:"TasteVoyage에서 만나요"},
    {img: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=2056&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "영화 동아리",info:"시네마포차 영업합니다"},
    {img: "https://images.unsplash.com/photo-1523975864490-174dd4d9a41e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "여행 동아리",info:"트레버 부원 모집"},
    {img: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "체스 동아리",info:"King'sGame 신입생 모집"},
    {img: "https://images.unsplash.com/photo-1495175448924-1d9a30c90a42?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "음악 동아리",info:"SoundDiary 부원 모집"},
    {img: "https://images.unsplash.com/photo-1504966981333-1ac8809be1ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "천문학 동아리",info:"별의 여정 어떠세요?"},
    {img: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "로봇 동아리",info:"로봇 워커스 모집"},
{img: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?q=80&w=2058&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "사진 동아리",info:"SEPE 신입생 모집"},
    {img: "https://images.unsplash.com/photo-1548123378-bde4eca81d2d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "댄스 동아리",info:"신바람 2023년 신입생 공고"},
    {img: "https://images.unsplash.com/photo-1529422643029-d4585747aaf2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "스포츠 동아리",info:"사이클러 동아리원 모집"},
    {img: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "등산 동아리",info:"PeakQuest와 함께하실 분"},
    {img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "글쓰기 동아리",info:"글잡이 동아리 모집"},
    {img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "요리 동아리",info:"TasteVoyage에서 만나요"},
    {img: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=2056&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "영화 동아리",info:"시네마포차 영업합니다"},
    {img: "https://images.unsplash.com/photo-1523975864490-174dd4d9a41e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "여행 동아리",info:"트레버 부원 모집"},
    {img: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "체스 동아리",info:"King'sGame 신입생 모집"},
    {img: "https://images.unsplash.com/photo-1495175448924-1d9a30c90a42?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "음악 동아리",info:"SoundDiary 부원 모집"},
    {img: "https://images.unsplash.com/photo-1504966981333-1ac8809be1ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "천문학 동아리",info:"별의 여정 어떠세요?"},
    {img: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "로봇 동아리",info:"로봇 워커스 모집"}]
    
    const navigate = useNavigate();

    const navigatePage = () => {
        navigate('/Main/UnionClub');
    }

    return (
        <Components.Group size = {props.size}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <Components.Title>연합 동아리</Components.Title>
                {props.size && <Components.MoreButton onClick={navigatePage}>더보기 <span className="arrow">&rarr;</span></Components.MoreButton>}
            </div>
            <Components.Slider>
            {slideshowImg.map((data, index) => (
                        <Components.SlideShow size = {props.size} key={index} style={{backgroundImage:`url(${data})`}}/>
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

export default UnionClub;