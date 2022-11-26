import styled from "styled-components";

export const Container = styled.div`
   background-color: ${({ theme }) => theme.bgPrimary }; 
   color: ${({ theme }) => theme.fcolorP };
   min-height: 100vh;
   transition: all .3s;
`

export const Area = styled.div`
   margin: auto;
   max-width: 980px;
   min-height: 100vh;
   display: flex;
   flex-direction: column;
`

export const Steps = styled.div`
   flex: 1;
   display: flex;
`

export const Sidebar = styled.div`
   width: 250px;
   border-right: 1px solid ${({theme})=>theme.borderColor};
`

export const Page = styled.div`
   flex: 1;
   padding: 10px 40px 20px 40px
`