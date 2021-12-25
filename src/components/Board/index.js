import React, {useCallback, useState} from 'react';
import List from '../List'

import BoardContext from '../../context/boardContext'

import { Container } from './styles';

import {loadLists} from '../../services/api'

const data = loadLists();

function Board() {
  const [lists, setLists] = useState(data)

  const move = useCallback((from , to) => {
    console.log(from, to)
  })
  return (
    <BoardContext.Provider value={{state: {lists}, action: {move}}}>
      <Container>
        {lists.map(list => <List key={list.title} data={list} />)}
      </Container>
    </BoardContext.Provider>
    
  );
}

export default Board;