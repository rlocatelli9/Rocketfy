import React, {useRef, useContext} from 'react';
import { useDrag, useDrop } from 'react-dnd'

import {useBoard} from '../../hooks'

import { Container, Label } from './styles';

function Card({data, index, listIndex, listLength}) {
  const ref = useRef(null);
  const {state:lists, action: {move}} = useBoard()

  const [{isDragging}, dragRef] = useDrag({
    type: 'CARD',
    item: {index, listIndex, listLength, ...data},
    collect: monitor => ({
      isDragging: monitor.isDragging()
    }),    
  })

  const [_, dropRef] = useDrop({
    accept: 'CARD',
    hover(item, monitor) {
      if(monitor.canDrop()){
        const draggedListIndex = item.listIndex
        const targetListIndex = listIndex
        const draggedIndex = item.index
        const targetIndex = index

        if(draggedIndex === targetIndex &&  draggedListIndex === targetListIndex) {
          return;
        }

        const targetSize = !!ref.current && ref.current.getBoundingClientRect()
        const targetCenter = (targetSize.bottom - targetSize.top) / 2;

        const draggedOffset = monitor.getClientOffset();
        const draggedTop = draggedOffset.y - targetSize.top

        if(draggedIndex < targetIndex && draggedTop < targetCenter) {
          return;
        }

        if(draggedIndex > targetIndex && draggedTop > targetCenter) {
          return;
        } 
        
        move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);

        item.index = targetIndex;
        item.listIndex = targetListIndex;
      }
    }
  })

  dragRef(dropRef(ref))

  return (
    !!data && (
      <Container ref={ref} isDragging={!!isDragging}>
        <header>
          {data.labels.map(label => <Label key={label} color={label} />)}      
        </header>
        <p>{data.content}</p>
        {!!data.user && <img src={data.user} alt="" />}
      </Container>
    )
  )
}

export default Card;