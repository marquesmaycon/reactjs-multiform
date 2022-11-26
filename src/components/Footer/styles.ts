import styled from "styled-components";

export const Footer = styled.footer`
   border-top: 1px solid ${({ theme }) => theme.borderColor};
   display: flex;
   align-items: center;
   justify-content: space-evenly;

   a {
      text-decoration: none;
      color: ${({ theme }) => theme.detailsPrimary};
      font-weight: bolder;
   }
`