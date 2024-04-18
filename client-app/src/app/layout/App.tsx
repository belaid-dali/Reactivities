import { useEffect, useState } from 'react';
import './styles.css';
import axios from 'axios';
import { Container} from 'semantic-ui-react';
import { Activity } from '../models/activity';
import NavBar from './NavBar.tsx';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard.tsx';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities')
      .then(response => {
        console.log(response);
        setActivities(response.data);
    })
  },[])
  

  return (
    <>
      <NavBar />
      <Container style={{marginTop: '7em'}}>
      <ActivityDashboard activities={activities}/>
      </Container>

    </>
  )
}

export default App
