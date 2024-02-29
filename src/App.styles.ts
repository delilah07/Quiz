import styled, { createGlobalStyle } from 'styled-components';

import BGImage from './assets/bg.png';

export const GlobalStyle = createGlobalStyle`
 html{
    height:100%;
    body{
        background-image: url(${BGImage});
        background-size:cover;
        padding: 0 20px;
        display: flex;
        justify-content: center;
        font-family: "Catamaran", sans-serif;
        font-optical-sizing: auto;
        font-weight: 700;
        font-style: normal;
        font-size: 1.3rem;
    }
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
 }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: #fff;
    text-shadow: 1px 1px 1px #000;
  }
  .score {
    color: #fff;
    font-size: 2rem;
  }
  h1 {
    font-family: 'Fascinate Inline', system-ui;
    font-style: 3rem;
    background-image: linear-gradient(180deg, #fff, #ff87b9);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    text-align: center;
    font-weight: 400;
    margin: 20px;
  }

  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #87f1ff);
    /* border: 2px solid #d38558; */
    box-shadow: 0px 5px 10px rgba(0, 0, 0.1);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
    font-family: 'Catamaran', sans-serif;
    font-size: 1.5rem;
  }
`;
