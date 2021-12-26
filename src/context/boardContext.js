import {createContext, useCallback, useState} from 'react'
import produce from 'immer'
import {loadLists} from '../services/api'

const BoardContext =  createContext({state: {}, action:{}});

const data = loadLists()

const BoardProvider = ({children}) => {
  const [lists, setLists] = useState(data)

  const move = useCallback((fromList, toList, from , to) => {
    setLists(produce(lists, draftLists => {
      const dragged = draftLists[fromList].cards[from]

      draftLists[fromList].cards.splice(from, 1);
      draftLists[toList].cards.splice(to, 0, dragged);
    }))
  }, [lists, setLists])

  return (
    <BoardContext.Provider value={{state: {lists}, action: {move}}}>
      {children}
    </BoardContext.Provider>
    
  );
}

export {BoardProvider, BoardContext}