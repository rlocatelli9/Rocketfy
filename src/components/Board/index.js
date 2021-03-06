import React, {useCallback, useState} from 'react';

import List from '../List'

import { Container } from './styles';

import { useBoard } from '../../hooks';

function Board() {
  const {state: {lists}} = useBoard()
  return (
    <Container>
      {lists.map((list, index) => <List key={list.title} index={index} data={list} />)}
    </Container>    
  );
}

export default Board;