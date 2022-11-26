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
`