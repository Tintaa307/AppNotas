import React from 'react'
import Header from './Header'
import MainSection from './MainSection'
import { reducer } from '../stores/reducer'
import { TodoProvider } from '../TodoProvider'

const initialState = {
  todos: [
    {
      text: 'ANANANANASHE',
      completed: true,
      id: 'b967afe24b23'
    },
    {
      text: 'Aguante JS',
      completed: true,
      id: '43286487fhsdjasd'
    },
    {
      text: 'Destiny Player',
      completed: true,
      id: '54937fhajd'
    },
    {
      text: 'Odio Chile',
      completed: true,
      id: '43242341aaaaa'
    },
    {
      text: 'Viva Racing',
      completed: true,
      id: 'b967afe24a13'
    }
  ],
  visibilityFilter: 'All'
}
const App = () => (
  <TodoProvider initialState={initialState} reducer={reducer}>
    <div>
      <Header />
      <MainSection />
    </div>
  </TodoProvider>
)

export default App
