import { useState, useRef } from "react";
import styled from "styled-components";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "react-datepicker/dist/react-datepicker.module.css";
import ReactDatePicker from "react-datepicker";


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
  justify-content: space-around;
  align-items: center;
  padding: 0 3px;
  font-size: 1.5em;

  // & * {
  //   color: #000000;
  //   cursor: pointer;
  // }

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

const EventDetailsModal = ({ selectedEvent, onSave, onDelete, allEvents, setAllEvents }) => {
    const [modal, closeModal] = useState(true); //모달창 열고 끄기
    const outside = useRef(null); //모달창 밖 클릭시 모달창 닫기

    //수정
    const [isEditing, setIsEditing] = useState(false);
    const [editedEvent, setEditedEvent] = useState(selectedEvent);

    const handleSave = () => {
        // onSave 함수에 수정된 이벤트를 전달하여 처리
        onSave(editedEvent);

        setIsEditing(false);
        closeModal(false);
    };

    //삭제
    const handleDelete = () => {
        onDelete(editedEvent);
        closeModal(false);
      };

    return(
        <>
        {
            modal && <ModalBg ref={outside} 
            //outside.current => ModalBg 밑에 코드 수정 필요
            onClick={ (e) => { if(e.target === outside.current) closeModal(false) } }
            >
                <ModalPopUp>
                    <ModalCloseBtn id={ModalCloseBtn} onClick={ () => closeModal(false) }>✖</ModalCloseBtn>
                    {isEditing ? ( //편집화면 일때
                        <>
                        <Header>
                            <SelectDiv>
                                <h4>일정 수정</h4>
                            </SelectDiv>
                        </Header>
                        <Body>
                            <TextField
                                style={{marginTop: "150px"}}
                                id="standard-size-normal-margin-normal-fullWidth"
                                fullWidth
                                placeholder="일정 제목"
                                variant="standard"
                                margin="normal"
                                value={editedEvent.title}
                                onChange={(e) => {
                                    setEditedEvent({...editedEvent, title: e.target.value});
                                }}
                            />
                            <SelectDiv style={{marginTop: "30px"}}>
                            날짜&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <ReactDatePicker placeholderText="시작일" style={{padding:"100px"}}
                                selected={editedEvent.start} onChange={(start)=> setEditedEvent({...editedEvent, start})}/>
                                <ReactDatePicker placeholderText="종료일" style={{padding:"100px"}}
                                selected={editedEvent.end} onChange={(end)=> setEditedEvent({...editedEvent, end})}/>
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
                                value={editedEvent.description}
                                onChange={(e) => {
                                    setEditedEvent({...editedEvent, description: e.target.value});
                                }}
                            />
                            <Button variant="contained" onClick={handleSave} fullWidth style={{marginTop: "5px"}}>
                                저장
                            </Button>
                        </Body>
                        </>
                    
                    ) : ( //편집 전
                    <>
                        <Header style={{marginTop: "20px"}}>
                            <SelectDiv >
                                <h4>{selectedEvent.title}</h4>
                            </SelectDiv>
                        </Header>
                        <Body>
                            <SelectDiv tyle={{marginTop: "30px"}}>
                                <h4>날짜</h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <h4>시작일: {selectedEvent.start.getFullYear().toString()+'.'
                                +(selectedEvent.start.getMonth()+1).toString()+'.'
                                +selectedEvent.start.getDate().toString()}</h4>
                                &nbsp;&nbsp;&nbsp;
                                <h4>종료일: {selectedEvent.end.getFullYear().toString()+'.'
                                +(selectedEvent.end.getMonth()+1).toString()+'.'
                                +selectedEvent.end.getDate().toString()}</h4>
                                {/* <h4>시작일: {selectedEvent.start.toString("YYYY-MM-DD")}</h4>
                                <h4>종료일: {selectedEvent.end.toString("YYYY-MM-DD")}</h4> */}
                            </SelectDiv>
                            <SelectDiv style={{marginTop: "30px"}}>
                                <h4>{selectedEvent.description}</h4>
                            </SelectDiv>
                            <SelectDiv style={{marginTop: "30px"}}>
                                <Button variant="contained" onClick={()=>setIsEditing(true)} fullWidth style={{marginTop: "5px"}}
                                sx={{
                                    m: 1,
                                    background: "linear-gradient(-20deg, #ffe8ec 0%, #fff3e8 100%);",
                                    color: "black",
                                    borderColor: "gray",
                                    ":hover": { borderColor: "black" },
                                  }}>
                                    수정
                                </Button>
                                &nbsp;&nbsp;
                                <Button
                                    variant="contained" onClick={handleDelete} fullWidth style={{marginTop: "5px"}}
                                    sx={{
                                        m: 1,
                                        background: "#E4E4E1",
                                        color: "black",
                                        borderColor: "gray",
                                        ":hover": { borderColor: "black" },
                                      }}>
                                    삭제
                                </Button>
                            </SelectDiv>
                        </Body>
                    </>
                    )}
                </ModalPopUp>
            </ModalBg>
        }
        </>
    );


};//EventDetailsModal

export default EventDetailsModal;