import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AdvancedForm from './components/AdvanceForm'
import { UserProvider } from './context/UserContext'
import Navbar from './context/Navbar'
import Profile from './context/Profile'
import TodoApp from './ReducerToDo/TodoApp'



const App = () => {
  return (
    <UserProvider>
      <TodoApp/>
      <Navbar />
      <Profile />
      <AdvancedForm />
    </UserProvider>
  );
};

export default App;
