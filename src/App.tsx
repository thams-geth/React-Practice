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
