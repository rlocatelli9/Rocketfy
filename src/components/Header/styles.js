import styled, {css} from 'styled-components';

export const Container = styled.div`
  height: 80px;
  padding: 0 30px;
  background: #3c85ff;
  color: #fff;

  display: flex;
  /* align-items: center; */

  h1 {
    margin-right: 30px;
    display: flex;
    align-items: center;
  }

  main {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 10px;
    section{
      height: 40px;
      display: flex;
      align-items: center;
    }
  }

  aside {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: auto;    
  }  
`;


export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  height: 30px;

  ul {
    display: flex;
    li {
      margin-right: 10px;
    }
  }
`;

export const Button = styled.button`
  border: none;
  background: transparent;
  color: ${props => props.isSelected ? '#FFF' : '#BBB'};
  font-weight: bold;
  
  display: flex;
  align-items: center;
  
  ${props => props.isSelected && css`
    transform: scale(0.9);
    padding-bottom: 10px;
    border-bottom: ${props => props.isSelected && '2px solid #FFF'};
  `}

  span {
    margin: 0 5px;
  }

  &:hover{
    cursor: pointer;
  }
`;

export const Profile = styled.section`
  margin-left: auto;
  min-width: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > svg {
    cursor: pointer;
  }

  > img {
    cursor: pointer;
    width: 40px;
    height: 40px;
    margin: 0 4px;
  }
`;

export const Actions = styled.section`
  display: flex;
  align-items: center;

  ul {
    display: flex;    
    align-items: center;
    align-content: flex-end;
  }

  li {
    margin-right: 8px;

    svg {
      cursor: pointer;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  button {
    min-width: 50px;
    height: 30px;
    padding: 6px;
    background: #0b66ff;
    border-radius: 4px;
    align-items: center;
    justify-content: center;

    small {
      color: #eee;

      &.listLength {
        font-size: 10px;
        margin-right: 5px;
        background: #6EC1E4;
        border-radius: 2px;
        padding: 3px;
        color: black;
      }
    }
  }
`;