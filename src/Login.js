import React, { useState } from "react";
import * as Components from './Components';
import { Link } from "react-router-dom";

function Login() {
  const [signIn, toggle] = useState(true);
  const [studentId,setStudentId] = useState(23);

  const changeStudentId = (event) => {
    setStudentId(event.target.value);
  }
  return (
    <Components.Body>
      <Components.Container>
        <Components.SignUpContainer signinIn={signIn}>
          <Components.Form>
            <Components.Title>회원가입</Components.Title>
            <Components.Explanation>아이디(E-mail)</Components.Explanation>
            <Components.Input type="email" placeholder="sample@gmail.com" />
            <Components.Explanation>비밀번호</Components.Explanation>
            <Components.Input type="password" placeholder="비밀번호를 8자 이상 입력해주세요" />
            <Components.Explanation>비밀번호 확인</Components.Explanation>
            <Components.Input type="password" placeholder="비밀번호를 한 번 더 입력해주세요" />

            <Components.HalfForm>
              <Components.Explanation>이름</Components.Explanation>
              <Components.Explanation>성별</Components.Explanation>
            </Components.HalfForm>

            <Components.HalfForm>
              <Components.Input type="text" placeholder="홍길동" size={true}/>
              <label><Components.Radio type="radio" name="gender"/>남자</label>
              <label><Components.Radio type="radio" name="gender"/>여자</label>
            </Components.HalfForm>

            <Components.Explanation>전화번호</Components.Explanation>
            <Components.Input type="text" placeholder="010-1234-5678" />

            <Components.HalfForm>
              <Components.Explanation>생년월일</Components.Explanation>
              <Components.Explanation>학번</Components.Explanation>
            </Components.HalfForm>

            <Components.HalfForm>
              <Components.Input type="text" placeholder="20001231" size={true}/>
              <Components.Select value={studentId} onChange={changeStudentId}>
                  {Array.from({length: 14}, (_, index) => 23 - index).map(id => (
                      <option key={id} value={id}>
                          {id}학번
                      </option>
                  ))}
              </Components.Select>
            </Components.HalfForm>

            <Components.Explanation>대학교</Components.Explanation>
            <Components.Input type="text" placeholder="한국대학교" />
            <Components.Button onClick={() => toggle(true)}>회원가입</Components.Button>
          </Components.Form>
        </Components.SignUpContainer>

        <Components.SignInContainer signinIn={signIn}>
          <Components.Form>
          <Components.Title>로그인</Components.Title>
            <Components.Input type="email" placeholder="이메일" />
            <Components.Input type="password" placeholder="비밀번호" />
            <Components.Anchor href="#">비밀번호를 잊어버리셨습니까?</Components.Anchor>
            <Link to="/Main"><Components.Button>로그인</Components.Button></Link>
          </Components.Form>
        </Components.SignInContainer>

        <Components.OverlayContainer signinIn={signIn}>
          <Components.Overlay signinIn={signIn}>
            
            <Components.LeftOverlayPanel signinIn={signIn}>
              <Components.Title>동방와랑 함께하기</Components.Title>
              <Components.Paragraph>
                동아리 커뮤니티 <b>동방와</b>는 연합 동아리와 교내 동아리 모두를 한 곳에서 <br />볼 수 있고
                동아리 일정을 관리하고 <br />소통 공간도 제공해 보다 편하게 <br />동아리 활동을 즐길 수 있습니다.
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(true)}>
                로그인
              </Components.GhostButton>
            </Components.LeftOverlayPanel>

            <Components.RightOverlayPanel signinIn={signIn}>
              <Components.Title>동아리 활동을 더 <br/> 편하게, <i>동방와</i></Components.Title>
              <Components.Paragraph>
                동아리에 가입하거나 동아리의 활동을 더 적극적으로 참여하고 싶다면?
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(false)}>
                회원가입
              </Components.GhostButton>
            </Components.RightOverlayPanel>
          </Components.Overlay>
        </Components.OverlayContainer>
      </Components.Container>
    </Components.Body>
  );
}

export default Login;
