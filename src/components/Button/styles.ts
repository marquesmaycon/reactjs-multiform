import styled from "styled-components";

export const Button = styled.button`
   background-color: ${({ theme }) => theme.detailsPrimary};
   color: #FFF;
   font-size: 14px;
   font-weight: bold;
   padding: 20px 40px;
   border: 0;
   border-radius: 30px;
   cursor: pointer;
   margin-block: 20px;
   margin-inline-end: 15px;
   transition: all .3s;

   &:hover {
      background-color: ${({ theme }) => theme.detailSecondary};
   }

   &:disabled {
      background-color: gray;
      color: #b8b8b4;
      cursor: auto;
   }
`