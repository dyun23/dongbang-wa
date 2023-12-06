//이벤트 클릭시 모달창 띄우기, 일정 추가
//추가된 일정 클릭시 -> 

import { useState, useRef } from "react";
import styled from "styled-components";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.module.css";


const AddBtn1=styled.button`
  border: 1px solid;
  background: white;
  border-radius: 5px;
  color: rgba(0, 0, 0, 0.8);
  width:200px;
  height: 60px;
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

const AddEvent = ({ onAddEvent }) => {

  const [modal, stopModal] = useState(false); //모달창 열고 끄기
  const outside = useRef(); //모달창 밖 클릭시 모달창 닫기
  const [age, setAge] = useState(''); //일정 구분 선택
  
 //새로운 이벤트 생성
  const [newEvent, setNewEvent] = useState({title: "", start: "", end: "", description: ""});
  // const [allEvents, setAllEvents] = useState([]);

  const handleAddEvent=()=>{
    onAddEvent(newEvent);
    stopModal(false);
    setNewEvent({title: "", start: "", end: "", description: ""});
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };

    return (
      <>
      <AddBtn1 onClick={ () => stopModal(true) }>+ 일정 추가</AddBtn1>
      {
        //모달 밖에 클릭하면 모달 model => false 호출
        modal && <ModalBg ref={outside} 
          //outside.current => ModalBg 밑에 코드 수정 필요
          onClick={ (e) => { if(e.target == outside.current) stopModal(false) } }
        > 
          <ModalPopUp>
            <ModalCloseBtn id={ModalCloseBtn} onClick={ () => stopModal(false) }>✖</ModalCloseBtn>
            <Header><h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;일정 추가</h4></Header>
            <Body>
              <TextField
                id="standard-size-normal-margin-normal-fullWidth"
                fullWidth
                placeholder="일정 제목"
                variant="standard"
                margin="normal"
                value={newEvent.title}
                onChange={(e) => {
                  setNewEvent({...newEvent, title: e.target.value});
                }}

                // error={titleError}
                // className={classes.textField}
                // onChange={(e) => {
                //   setTitle(e.target.value);
                // }}
              />
              <SelectDiv>
                날짜
                <ReactDatePicker placeholderText="시작일" style={{padding:"10px"}}
                selected={newEvent.start} onChange={(start)=> setNewEvent({...newEvent, start})}/>
                <ReactDatePicker placeholderText="종료일" style={{padding:"10px"}}
                selected={newEvent.end} onChange={(end)=> setNewEvent({...newEvent, end})}/>
              </SelectDiv>
              <SelectDiv>
                일정 구분&nbsp;&nbsp;&nbsp;
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard-margin-normal"
                    margin="normal"
                    value={age}
                    onChange={handleChange}
                    label="Age">
                    {/* <MenuItem value="">
                      <em>None</em>
                    </MenuItem> */}
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
                    {/* <MenuItem value="">
                      <em>None</em>
                    </MenuItem> */}
                    <MenuItem value={1}>이벤트</MenuItem>
                    <MenuItem value={2}>공지</MenuItem>
                    <MenuItem value={3}>대회</MenuItem>
                  </Select>
                </FormControl>
              </SelectDiv>
              <TextField
                id="standard-multiline-static-margin-normal-fullWidth"
                fullWidth
                multiline
                placeholder="일정 상세 내용"
                rows={4}
                // className={classes.textField}
                variant="standard"
                margin="normal"
                value={newEvent.description}
                onChange={(e) => {
                  setNewEvent({...newEvent, description: e.target.value});
                }}
              />
              <Button
                // className={classes.button}
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