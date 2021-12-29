
import { useContext } from 'react';
import NewComponent from '../../components/NewComponent';
import NewContext from '../../providers/NewContextProvider';
import { Page1Container } from './style';

export const Page1: React.FC = () => {
  const {user,setUser} = useContext(NewContext)

  const handleContext = () => {
    const newUser = {example: 'Mario'}
    setUser(newUser)
  }
 
  return (
    <Page1Container>
      <NewComponent onClick={handleContext}>
        <h1>Click Here: Hello World {user.example}</h1>
      </NewComponent>
    </Page1Container>


  );
}

