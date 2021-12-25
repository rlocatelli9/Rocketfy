import React from 'react';
import Label from '../Label'

import { Container } from './styles';
import {success} from '../../utils/color'

function Card() {
  return (
    <Container>
      <header>
        <Label color={success}/>
      </header>
      <p>Fazer migração completa do servidor</p>
      <img src="https://avatars.dicebear.com/api/bottts/roboto.svg" alt="foto avatar Jane Doe" srcset="" />
    </Container>
  )
}

export default Card;