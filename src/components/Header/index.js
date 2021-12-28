import React, {useState} from 'react';
import {
  MdOutlineAlignVerticalTop, 
  MdOutlineExpandMore, 
  MdOutlineSpaceDashboard,
  MdOutlineNotificationsNone,
  MdMoreVert,
  MdOutlineBuild,
  MdOutlineSettings,
  MdOutlinePeopleOutline,
  MdOutlineNavigation,
  MdAdd,
  MdAvTimer
} from 'react-icons/md'

import { Container, NavBar, Button, Profile, Actions } from './styles';

import {useBoard} from '../../hooks'

const imgSrc= 'https://avatars.dicebear.com/api/adventurer/r.svg'

function Header() {
  const {state: {lists}} = useBoard()
  const [isSelected, setIsSelect] = useState('board')
  const [listLength, setListLength] = useState(() => {
    if(Array.isArray(lists)) return lists.length
    else return 0
  })
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
                <MdOutlineAlignVerticalTop size={20} color={isSelected === 'board' ? '#FFF' : '#BBB'}/>
                <span>Visualizar em Kanban</span>
                <MdOutlineExpandMore color="#BBB"/>
              </Button>
            </li>
            <li>
              <Button 
                type="button" 
                isSelected={isSelected === 'report'} 
                onClick={(event) => handleClick(event, 'report')}
              >
                <MdOutlineSpaceDashboard size={20} color={isSelected === 'report' ? '#FFF' : '#BBB'}/>
                <span>Relatórios</span>
                <MdOutlineExpandMore color="#BBB"/>
              </Button>
            </li>
          </ul>
        </NavBar>
      </main>
      <aside>
        <Profile>
          <MdOutlineNotificationsNone size={20} color="#DDD"/>
          <img src={imgSrc} alt="imagem de perfil" />
          <MdMoreVert size={20} color="#DDD"/>
        </Profile>
        <Actions>
          <ul>
            <li>
              <Button 
                type="button" 
              >
                <MdAdd color="#DDD"/>
                <small>Convidar time</small>
              </Button>
            </li>
            <li>
              <Button 
                type="button" 
              >
                <small className='listLength'>{listLength}</small>
                <MdOutlineNavigation color="#DDD"/>
              </Button>
            </li>
            <li>
              <MdOutlinePeopleOutline size={20} color="#DDD"/>
            </li>
            <li>            
              <MdAvTimer size={20} color="#DDD"/>
            </li>
            <li>
              <MdOutlineSettings size={20} color="#DDD"/>
            </li>
            <li>
              <MdOutlineBuild size={20} color="#DDD"/>
            </li>
            <li></li>
          </ul>
          
          
        </Actions>
      </aside>
    </Container>
  )
}

export default Header;