import { type } from '@testing-library/user-event/dist/type';
import styled from 'styled-components';

export const Container = styled.div`
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    position: relative;
    overflow: hidden;
    width: 800px;
    max-width: 100%;
    min-height: 700px;
`;

export const SignUpContainer = styled.div`
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
    left: 0;
    width: 50%;
    opacity: 0;
    z-index: 1;
    ${props => props.signinIn !== true ? `
        transform: translateX(100%);
        opacity: 1;
        z-index: 5;
    ` 
    : null}
`;


export const SignInContainer = styled.div`
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
    left: 0;
    width: 50%;
    z-index: 2;
    ${props => (props.signinIn !== true ? `transform: translateX(100%);` : null)}
`;

export const Form = styled.form`
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
    text-align: center;
`;

export const Title = styled.h1`
    font-weight: 600;
    margin: 10px;
    margin-bottom: 15px;
`;

export const Explanation = styled.p`
    color: rgba(0, 0, 0, 0.80);
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 100%;
    height: 22px;
    margin: 0;
    text-align: left;
`

export const Input = styled.input`
    background-color: #eee;
    border: none;
    padding: 12px 15px;
    margin-bottom: 20px;
    width: 100%;
    box-shadow: 4px 4px 8px 0px rgba(82, 82, 82, 0.25);
    ${props => (props.size == true ? `width: 40%;` : null)}
`;

export const Radio = styled.input`
    border-radius: 50%;
    width: 20px;
    height: 15px;
    margin: 15px;
    margin-left: 30px;
    accent-color: #f7673d;
    line-height: 10px;
    
    &:hover {
        cursor: pointer;
    }
`

export const HalfForm = styled.div`
    display: flex;
    width: 100%;
`

export const Button = styled.button`
   border-radius: 20px;
   border: 1px solid #fd7f5a;
   background-color: #fd7f5a;
   color: #ffffff;
   font-size: 12px;
   font-weight: bold;
   padding: 12px 45px;
   filter: drop-shadow(4px 4px 8px rgba(0, 0, 0, 0.25));
   letter-spacing: 1px;
   text-transform: uppercase;
   transition: transform 80ms ease-in;
   &:active{
       transform: scale(0.95);
   }
   &:focus {
       outline: none;
   }
`;
export const GhostButton = styled(Button)`
    background-color: transparent;
    border-color: #ffffff;
`;

export const Anchor = styled.a`
    color: #333;
    font-size: 14px;
    text-decoration: none;
    margin: 15px 0;
`;
export const OverlayContainer = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.6s ease-in-out;
    z-index: 100;
    ${props =>
    props.signinIn !== true ? `transform: translateX(-100%);` : null}
`;

export const Overlay = styled.div`
    background: #ff416c;
    background: -webkit-linear-gradient(-20deg, #fc6076 0%, #ff9a44 100%);
    background: linear-gradient(-20deg, #fc6076 0%, #ff9a44 100%);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 0;
    color: #ffffff;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
    ${props => (props.signinIn !== true ? `transform: translateX(50%);` : null)}
`;

export const OverlayPanel = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    text-align: center;
    top: 0;
    height: 100%;
    width: 50%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
`;

export const LeftOverlayPanel = styled(OverlayPanel)`
    transform: translateX(-20%);
    ${props => props.signinIn !== true ? `transform: translateX(0);` : null}
`;

export const RightOverlayPanel = styled(OverlayPanel)`
    right: 0;
    transform: translateX(0);
    ${props => props.signinIn !== true ? `transform: translateX(20%);` : null}
`;

export const Paragraph = styled.p`
    font-size: 18px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0.5px;
    margin: 20px 0 30px
`;