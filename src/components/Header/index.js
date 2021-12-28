import React, {useState} from 'react';
import {MdOutlineAlignVerticalTop, MdOutlineExpandMore, MdOutlineSpaceDashboard} from 'react-icons/md'

import { Container, NavBar, Button } from './styles';

function Header() {
  const [isSelected, setIsSelect] = useState('board')
  const handleClick = (event, type) => {
    event.preventDefault();
    setIsSelect(type)
  }
  return (
    <Container>
      <h1>Rocketfy</h1>
      <main>
        <section><p>Desenvolvimento de Software - Agile</p></section>
        <NavBar>
          <ul>
            <li>
              <Button 
                type="button" 
                isSelected={isSelected === 'board'}
                onClick={(event) => handleClick(event, 'board')}
              >
                <MdOutlineAlignVerticalTop size={20} color="#FFF"/>
                <span>Visualizar em Kanban</span>
                <MdOutlineExpandMore color="#DDD"/>
              </Button>
            </li>
            <li>
              <Button 
                type="button" 
                isSelected={isSelected === 'report'} 
                onClick={(event) => handleClick(event, 'report')}
              >
                <MdOutlineSpaceDashboard size={20} color="#FFF"/>
                <span>Relatórios</span>
                <MdOutlineExpandMore color="#DDD"/>
              </Button>
            </li>
          </ul>
        </NavBar>
      </main>
      <aside>
        <section>Profile</section>
        <section>actions</section>
      </aside>
    </Container>
  )
}

export default Header;