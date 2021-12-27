import styled from 'styled-components';

export const Container = styled.div`
  height: 80px;
  padding: 0 30px;
  background: #7159c1;
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
  color: #FFF;
  
  display: flex;
  align-items: center;

  span {
    margin-left: 5px;
  }

  &:hover{
    cursor: pointer;
  }
`;