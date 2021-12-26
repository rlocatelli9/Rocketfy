import React from 'react'
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'

import Header from './components/Header';
import Board from './components/Board';

import GlobalStyle from './styles/global'
import { BoardProvider } from './context/boardContext';

function App() {
  return ( 
    <DndProvider backend={HTML5Backend}>
      <BoardProvider>
        <Header />
        <Board />         
        <GlobalStyle />
      </BoardProvider>
    </DndProvider>       
  );
}

export default App;
