import styled from "styled-components";

export const Container = styled.div`
   p {
      font-size: 13px;
      color: ${({ theme }) => theme.fcolorS};
   }

   h1 {
      margin: 0;
      padding: 0;
      font-size: 26px;
   }

   hr {
      height: 1px;
      border: 0;
      background-color: ${({theme})=>theme.borderColor};
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
         border: 2px solid ${({ theme }) => theme.detailsPrimary };
         border-radius: 10px;
         color: #FFF;
         outline: 0;
         font-size: 18px;
         background-color: ${({theme})=> theme.bgSecondary};
         transition: all .3s;
      }
   }
`