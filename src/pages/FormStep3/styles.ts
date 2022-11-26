import styled from "styled-components";

export const Container = styled.div`
   p {
      font-size: 13px;
      color: #b8b8b4;
   }

   h1 {
      margin: 0;
      padding: 0;
      font-size: 26px;
   }

   hr {
      height: 1px;
      border: 0;
      background-color: #16195C;
      margin: 30px 0;
   }

   label {
      font-size: 13px;
      margin-bottom: 20px;
      display: block;

      input {
         display: block;
         margin-top: 7px;
         box-sizing: border-box;
         width: 100%;
         padding: 17px 10px;
         border: 2px solid #25cd89;
         border-radius: 10px;
         color: #FFF;
         outline: 0;
         font-size: 18px;
         background-color: #02044A;
      }
      
   }

   button {
      background-color: #25CD89;
      color: #FFF;
      font-size: 14px;
      font-weight: bold;
      padding: 20px 40px;
      border: 0;
      border-radius: 30px;
      cursor: pointer;
      margin-top: 30px;
      margin-inline-end: 10px;
      transition: all .3s;

      &:hover {
         background-color: #03AB67;
      }
   }

   button:disabled {
      background-color: gray;
      color: #b8b8b4;
      cursor: auto;
      // 1h e 7m
   }
`