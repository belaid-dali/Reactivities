import { useEffect, useState } from 'react';
import './styles.css';
import { Container} from 'semantic-ui-react';
import { Activity } from '../models/activity';
import NavBar from './NavBar.tsx';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard.tsx';
import { v4 as uuid } from 'uuid';
import agent from '../api/agent.ts';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSlectedActivity] = useState< Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    agent.Activities.list().then(response => {
        setActivities(response);
    })
  },[])

  function handleSelectActivity(id: string) {
    setSlectedActivity(activities.find(x => x.id === id));
  }

  function handleCancelSelectActivity() {
    setSlectedActivity(undefined);
  }
  
  function handleFormOpen(id?: string) {
    id ? handleSelectActivity(id) : handleCancelSelectActivity();
    setEditMode(true);
  }

  function handleFormClose() {
    setEditMode(false);
  }

  function handleCreateOrEditActivity(activity: Activity) {
    activity.id ? setActivities([...activities.filter(x => x.id !== activity.id), activity]) : setActivities([...activities, {...activity, id: uuid()}]);
    setEditMode(false);
    setSlectedActivity(activity);
  }

  function handleDeleteActivity(id: string) {
    setActivities([...activities.filter(x => x.id ! == id)]);
  }

  return (
    <>
      <NavBar openForm={handleFormOpen} />
      <Container style={{marginTop: '7em'}}>
      <ActivityDashboard 
        activities={activities}
        selectedActivity={selectedActivity}
        selectActivity={handleSelectActivity}
        cancelSelectActivity={handleCancelSelectActivity}
        editMode={editMode}
        openForm={handleFormOpen}
        closeForm={handleFormClose}
        createOrEdit={handleCreateOrEditActivity}
        deleteActivity={handleDeleteActivity}
        />
      </Container>

    </>
  )
}

export default App
