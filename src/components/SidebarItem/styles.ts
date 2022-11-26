import styled from "styled-components";

export const Container = styled.div`
   margin: 30px 0;
   cursor: pointer;

   a {
      display: flex;
      align-items: center;
      text-decoration: none;
   }
`

export const Info = styled.div`
   flex: 1;
   margin-right: 20px;
`

export const Title = styled.div`
  text-align: right;
  font-weight: bold;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.fcolorP};
`

export const Description = styled.div`
   text-align: right;
   font-size: 13px;
   color:${({ theme }) => theme.fcolorS};;
`

export const IconArea = styled.div<{ active: boolean }>`
   width: 50px;
   height: 50px;
   border-radius: 50%;
   background-color: ${({ active, theme }) => active ? `${theme.detailsPrimary}` : '#494a7c'} ;
   display: flex;
   justify-content: center;
   align-items: center;   
   transition: all .3s;
`

export const Point = styled.div<{ active: boolean }>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  border: 3px solid #494a7c;
  margin-left: 30px;
  margin-right: -6px;
  background-color:  ${({ active, theme }) => active ? `${theme.detailsPrimary}` : '#02044a'};
`

