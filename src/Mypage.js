import React, { useState } from 'react';
import * as Components from './Components';
import { useDispatch, useSelector } from "react-redux";

const Mypage = () => {
    const [showFields, setShowFields] = useState(false);

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const dispatch = useDispatch();
    
    const user = useSelector((state) => state);

   const handleChangePassword = (event) => {
      setPassword(event.target.value);
      dispatch({type: 'setPassword', payload: event.target.value});
    };

    const handleChangeConfirmPassword = (event) => {
      setConfirmPassword(event.target.value);
    };

   const handleChangePhoneNumber = (event) => {
      dispatch({type: 'setPhoneNumber', payload: event.target.value});
    };
   const handleChangeBirth = (event) => {
      dispatch({type: 'setBirth', payload: event.target.value});
    };
   const handleChangeStudendId = (event) => {
      dispatch({type: 'setStudentId', payload: event.target.value});
    };
   const handleChangeUniversity = (event) => {
      dispatch({type: 'setUniversity', payload: event.target.value});
    };

    const toggleFields = () => {
      if (showFields) {
        if (password !== confirmPassword) {
          alert('비밀번호가 일치하지 않습니다.');
          return;
        } else {
          alert('회원 정보가 수정되었습니다.');
          setPassword('');
          setConfirmPassword('');
        }
      }
      setShowFields(!showFields);
    };

    return (
        <Components.Group size={true}>
          <Components.Form>
            <Components.Title>마이페이지</Components.Title>
            <Components.Explanation>아이디(E-mail)</Components.Explanation>
            <Components.Input type="email" placeholder="sample@gmail.com" value={user.email} readOnly/>
            <Components.HalfForm>
              <Components.Explanation>이름</Components.Explanation>
              <Components.Explanation>성별</Components.Explanation>
            </Components.HalfForm>

            <Components.HalfForm>
              <Components.Input style={{marginLeft: '12px'}} type="text" placeholder="홍길동" size={true} value={user.name} readOnly/>
              <label><Components.Radio style={{marginLeft: '50px'}} type="radio" name="gender" value='남자' disabled={true} checked={user.gender === '남자'}/>남자</label>
              <label><Components.Radio type="radio" name="gender" value='여자' disabled={true} checked={user.gender === '여자'}/>여자</label>
            </Components.HalfForm>
            <Components.Line/>
            <Components.Explanation>전화번호</Components.Explanation>
            <Components.Input type="text" placeholder="010-1234-5678" value={user.phoneNumber} readOnly={!showFields} onChange={handleChangePhoneNumber}/>

            <Components.HalfForm>
              <Components.Explanation>생년월일</Components.Explanation>
              <Components.Explanation>학번</Components.Explanation>
            </Components.HalfForm>

            <Components.HalfForm>
              <Components.Input style={{marginLeft: '12px'}} type="text" placeholder="20001231" size={true} value={user.birth} readOnly={!showFields} onChange={handleChangeBirth}/>
              <Components.Select style={{marginLeft: '50px', width: '46%'}} value={user.studentId} disabled={!showFields} onChange={handleChangeStudendId}>
                  {Array.from({length: 14}, (_, index) => 23 - index).map(id => (
                      <option key={id} value={`${id}학번`}>
                          {id}학번
                      </option>
                  ))}
              </Components.Select>
            </Components.HalfForm>

            <Components.Explanation>대학교</Components.Explanation>
            <Components.Input type="text" placeholder="한국대학교" value={user.university} readOnly={!showFields} onChange={handleChangeUniversity}/>
            {showFields && (<>
              <Components.Explanation>비밀번호</Components.Explanation>
              <Components.Input type="password" placeholder="비밀번호를 입력해주세요" onChange={handleChangePassword}/>
              <Components.Explanation>비밀번호 확인 {password && confirmPassword ? (password === confirmPassword ? ' (일치)' : ' (불일치)') : ''}</Components.Explanation>
              <Components.Input type="password" placeholder="비밀번호를 한 번 더 입력해주세요" onChange={handleChangeConfirmPassword}/>
            </>)}
            <Components.Button type="button" onClick={toggleFields}>{showFields ? "수정 완료" : "정보 수정"}</Components.Button>
          </Components.Form>
        </Components.Group>
    );
};

export default Mypage;