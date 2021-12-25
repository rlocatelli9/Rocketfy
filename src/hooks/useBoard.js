import { useContext } from 'react';
import BoardContext from '../context/boardContext'

function useBoard () {
  const context = useContext(BoardContext);
  if (!context) {
    throw new Error('useBoard deve ser usado com um BoardContext.Provider');
  }
  return context;
}

export default useBoard;