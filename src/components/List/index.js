import React, {useRef} from 'react';
import Card from '../Card';

import { useDrag, useDrop } from 'react-dnd'

import { MdAdd } from 'react-icons/md'
import { Container } from './styles';
import { useBoard } from '../../hooks';

function List({data, index: listIndex}) {
  const ref = useRef(null)
  const {action:{move}} = useBoard()

  const [_, dropRef] = useDrop({
    accept: 'CARD',
    hover(item, monitor) {
      if(monitor.canDrop()) {
        const draggedListIndex = item.listIndex
        const targetListIndex = listIndex
        const draggedIndex = item.index
        const targetIndex = item.listLength

        if(draggedListIndex === targetListIndex) {
          return;
        }

        move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);

        item.index = targetIndex;
        item.listIndex = targetListIndex;
      }
    },      
  })

  dropRef(ref)

  return (
   !!data && (
      <Container ref={ref} done={!!data.done}>
        <header>
          <h2>{data.title}</h2>
          {!!data.creatable && (
            <button type='button'>
              <MdAdd size={24} color='#FFF'/>
            </button>
          )}
        </header>

        <ul>
          {data.cards.length > 0 && data.cards.map((card, index) => (
            !!card && <Card key={card.id} data={card} index={index} listIndex={listIndex} listLength={data.cards.length}  />
          ))}
        </ul>
      </Container>
   )
  )
}

export default List;