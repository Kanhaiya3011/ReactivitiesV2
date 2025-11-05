import { Fragment } from "@emotion/react/jsx-runtime";
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
    const [activities, setActivities] = useState<Activity[]>([]);

    useEffect(() => {
        axios.get<Activity[]>('https://localhost:5001/api/activities')
            .then(response => setActivities(response.data))
            .catch(error => console.error('Error fetching activities:', error));
    }, []);
  return (
    <Fragment>
      <Typography variant="h3">Hello Re-Activities</Typography>
      <List>
        {activities.map(activity => (
          <ListItem key={activity.id}>
            <ListItemText primary={activity.title} />
            <ListItemText secondary={<i>{activity.description}</i>} />
            <ListItemText>
              {new Date(activity.date).toLocaleDateString()} - {activity.category} - {activity.city} - {activity.venue}
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Fragment>  
  )
}

export default App
