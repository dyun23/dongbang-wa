import { useState, useRef } from "react";
import styled from "styled-components";
import Button from '@mui/material/Button';
import "react-datepicker/dist/react-datepicker.module.css";


// const AddBtn1=styled.button`
//   border: 1px solid;
//   background: white;
//   border-radius: 5px;
//   color: rgba(0, 0, 0, 0.8);
//   width:200px;
//   height: 60px;
// `;
const ModalPopUp=styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  padding: 40px;
  text-align: center;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
  z-index: 100;
`;
const ModalBg=styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;
const ModalCloseBtn=styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  border: none;
  color: rgba(0, 0, 0, 0.7);
  background-color: transparent;
  font-size: 20px;
`;
const Header=styled.div`
  background-color: white;
  height: 7vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3px;
  font-size: 1.5em;

  & * {
    color: #000000;
    cursor: pointer;
  }

`;
const Body=styled.div`
  background-color: white;
  padding-top: 10vh;
  padding-left:1vh;
  padding-right:1vh;
  height: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

`;
const SelectDiv=styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  text-align: left;
`;

const EventDetailsModal = ({ selectedEvent, onClose }) => {
    const [modal, closeModal] = useState(true); //모달창 열고 끄기
    const outside = useRef(null); //모달창 밖 클릭시 모달창 닫기

    return(
        <>
        {
            modal && <ModalBg ref={outside} 
            //outside.current => ModalBg 밑에 코드 수정 필요
            onClick={ (e) => { if(e.target == outside.current) closeModal(false) } }
            >
                <ModalPopUp>
                    <ModalCloseBtn id={ModalCloseBtn} onClick={ () => closeModal(false) }>✖</ModalCloseBtn>
                    <Header><h3>{selectedEvent.title}</h3></Header>
                    <Body>
                        <SelectDiv>
                            날짜&nbsp;&nbsp;&nbsp;
                            <p>시작일: {selectedEvent.start?.toString()}</p>
                            <p>종료일: {selectedEvent.end?.toString()}</p>
                        </SelectDiv>
                        {/* <SelectDiv>
                            일정 구분&nbsp;&nbsp;&nbsp;
                            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard-margin-normal"
                                margin="normal"
                                value={age}
                                onChange={handleChange}
                                label="Age">
                                <MenuItem value={1}>A동아리</MenuItem>
                                <MenuItem value={2}>B동아리</MenuItem>
                                <MenuItem value={3}>연합동아리</MenuItem>
                            </Select>
                            </FormControl>
                            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={age}
                                onChange={handleChange}
                                label="Age">
                                <MenuItem value={1}>이벤트</MenuItem>
                                <MenuItem value={2}>공지</MenuItem>
                                <MenuItem value={3}>대회</MenuItem>
                            </Select>
                            </FormControl>
                        </SelectDiv> */}
                        <SelectDiv>
                            <p>Description: {selectedEvent.description}</p>
                        </SelectDiv>
                        <SelectDiv>
                            <Button
                                variant="contained">
                                수정
                            </Button>
                            <Button
                                variant="contained">
                                삭제
                            </Button>
                        </SelectDiv>
                    </Body>
                </ModalPopUp>
            </ModalBg>
        }
        </>
    );
};//EventDetailsModal

export default EventDetailsModal;