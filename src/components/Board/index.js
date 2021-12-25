import React, {useCallback, useState} from 'react';
import produce from 'immer'

import List from '../List'

import BoardContext from '../../context/boardContext'

import { Container } from './styles';

import {loadLists} from '../../services/api'

const data = loadLists();

function Board() {
  const [lists, setLists] = useState(data)

  const move = useCallback((fromList, toList, from , to) => {
    setLists(produce(lists, draftLists => {
      const dragged = draftLists[fromList].cards[from]

      draftLists[fromList].cards.splice(from, 1);
      draftLists[toList].cards.splice(to, 0, dragged);
    }))
  })
  return (
    <BoardContext.Provider value={{state: {lists}, action: {move}}}>
      <Container>
        {lists.map((list, index) => <List key={list.title} index={index} data={list} />)}
      </Container>
    </BoardContext.Provider>
    
  );
}

export default Board;