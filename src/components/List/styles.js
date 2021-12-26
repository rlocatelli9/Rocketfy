import styled, {css} from 'styled-components';

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;
  opacity: ${props => props.done ? 0.6 : 1};
  flex: 0 0 320px; // flex-grow; flex-shrink; flex-basis;

  // flex-grow: determina quanto um componente poderá se esticar. 0 - fixed. 1 - 100% do espaço
  // flex-shrink: determina quanto um componente poderá se encolher. 
  // flex-basis: determina o tamanho base de um elemento;

  & + &{
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;

    h2 {
      font-weight: 500;
      font-size: 16px;
      padding: 0 10px;
    }

    button {
      width: 42px;
      height: 42px;
      background: #3b5bfd;
      border-radius: 18px;
      border: 0;
      cursor: pointer;
    }
  }

  ul {
    margin-top: 30px;
  }

  ${props => props.isDragging && css`
    border: 2px dashed rgba(0,0,0, 0.2);
    padding-top: 31px;
    border-radius: 0;
    background: transparent;
    box-shadow: none;
    cursor: grabbing; 

    p, img, header {
      opacity: 0;
    }
  `}

`;
