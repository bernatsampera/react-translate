import styled, { css }  from 'styled-components';
import { color, size } from '../shared/theme';
import { Select, Drawer, Paper } from '@material-ui/core';


// SEARCHFORM 
export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
`;

export const LanguageContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const StyledSelect = styled(Select)`
  min-width: 120px;
`;

export const SearchContainer = styled.div`
  padding: 80px 0;
  display: flex;
  flex-direction: column;
`;


// DISPLAY TRANSLATION
export const TranslationContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const WordContainer = styled.div`
  text-align: center;
  padding: 40px 0;
  font-size: x-large;
`;

export const StyledPaper = styled(Paper)`
  height: 20vh;
  width: 20vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5em;
  color: ${color.Dark} !important;
  ${props =>
    props.color && css`
      background-color: ${props.color} !important;
      // border-left: 6px solid ${color.Green}
  `}
`;

export const TranslationTitle = styled.h3`
  padding-bottom: 20px;
  text-align: center;
`; 



// DRAWER
export const StyledDrawer = styled(Drawer)`
  & > div {
    width: ${size.history};
    top: auto;
    scrollbar-width: none;
    padding: 35px 0;
    background-color: ${color.Primary};
    color: ${color.Text};
    ::-webkit-scrollbar {
      display:none;
    }
  }
`;

export const HistoryTitle = styled.h3`
  padding-bottom: 20px;
  text-align: center;
`; 

export const DrawerElementsList = styled.ul`
  list-style-type: none;
`;

export const DrawerElement = styled.li`
  text-align: center;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: ${color.Secondary}
  }
  ${props =>
    props.selected && css`
      background-color: ${color.Secondary};
      border-left: 6px solid ${color.Green}
  `}
`;







