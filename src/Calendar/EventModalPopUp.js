//이벤트 클릭시 모달창 띄우기, 일정 추가
//추가된 일정 클릭시 -> 

import { useState, useRef } from "react";
import styled from "styled-components";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.module.css";


const AddBtn1=styled.button`
  border: 1px solid;
  background: white;
  font-size: 18px;
  border-radius: 5px;
  color: rgba(0, 0, 0, 0.8);
  width:200px;
  height: 65px;
`;
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


const AddEvent = ({ onAddEvent }) => {

  const [modal, stopModal] = useState(false); //모달창 열고 끄기
  const outside = useRef(); //모달창 밖 클릭시 모달창 닫기
  
 //새로운 이벤트 생성
  const [newEvent, setNewEvent] = useState({title: "", start: "", end: "", description: ""});

  const handleAddEvent=()=>{
    onAddEvent(newEvent);
    stopModal(false);
    setNewEvent({title: "", start: "", end: "", description: ""});
  };


    return (
      <>
      <AddBtn1 onClick={ () => stopModal(true) }>+ 일정 추가</AddBtn1>
      {
        modal && <ModalBg ref={outside} 
          onClick={ (e) => { if(e.target == outside.current) stopModal(false) } }
        > 
          <ModalPopUp>
            <ModalCloseBtn id={ModalCloseBtn} onClick={ () => stopModal(false) }>✖</ModalCloseBtn>
            <Header><h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;일정 추가</h4></Header>
            <Body>
              <TextField
                style={{marginTop: "150px"}}
                id="standard-size-normal-margin-normal-fullWidth"
                fullWidth
                placeholder="일정 제목"
                variant="standard"
                margin="normal"
                value={newEvent.title}
                onChange={(e) => {
                  setNewEvent({...newEvent, title: e.target.value});
                }}
              />
              <SelectDiv style={{marginTop: "30px"}}>
                날짜&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <ReactDatePicker placeholderText="시작일" style={{padding:"100px"}}
                selected={newEvent.start} onChange={(start)=> setNewEvent({...newEvent, start})}/>
                <ReactDatePicker placeholderText="종료일" style={{padding:"100px"}}
                selected={newEvent.end} onChange={(end)=> setNewEvent({...newEvent, end})}/>
              </SelectDiv>
              <TextField
                style={{marginTop: "30px"}}
                id="standard-multiline-static-margin-normal-fullWidth"
                fullWidth
                multiline
                placeholder="일정 상세 내용"
                rows={8}
                variant="standard"
                margin="normal"
                value={newEvent.description}
                onChange={(e) => {
                  setNewEvent({...newEvent, description: e.target.value});
                }}
              />
              <Button 
                style={{marginTop: "5px"}}
                sx={{
                  m: 1,
                  background: "linear-gradient(-20deg, #ffe8ec 0%, #fff3e8 100%);",
                  color: "black",
                  borderColor: "gray",
                  ":hover": { borderColor: "black" },
                }}
                fullWidth
                variant="contained"
                onClick={handleAddEvent}
              >
                완료
              </Button>
            </Body>
          </ModalPopUp>
        </ModalBg>
      }
    </>
    )
  
  }
  
  export default AddEvent;