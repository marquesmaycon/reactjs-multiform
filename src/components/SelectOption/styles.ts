import styled from "styled-components";
import { Theme } from "../theme";

export const Container = styled.div<{ selected: boolean }>`
   display: flex;
   border: 2px solid ${({ selected, theme }) => selected ? `${theme.detailsPrimary}` : '#AAAAAA55'};
   border-radius: 10px;
   padding: 9px;
   margin-bottom: 10px;
   align-items: center;
   cursor: pointer;
   transition: all .3s;

   &:hover {
      border: 2px solid ${({ theme }) => theme.detailSecondary};
   }
`

export const Icon = styled.div`
   width: 60px;
   height: 60px;
   border-radius: 50%;
   background-color: ${({ theme }) => theme.bgSecondary};
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 25px;
`

export const Info = styled.div`
   flex: 1;
   margin-left: 20px;
`

export const Title = styled.div`
   font-size: 17px;
   font-weight: bold;
   margin-bottom: 7px;
`

export const Description = styled.div`
   font-size: 14px;
   color: ${({ theme }) => theme.fcolorS};
`