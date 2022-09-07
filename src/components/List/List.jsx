import React from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

// import PlaceDetails from '../PlaceDetails/PlaceDetails';
import useStyles from './styles.js';

const List = () => {
  const classes = useStyles();

//   useEffect(() => {
//     setElRefs((refs) => Array(places.length).fill().map((_, i) => refs[i] || createRef()));
//   }, [places]);
  const isLoading = false
  const iots =[
    {name:"iot"},
    {name:"iot"},
    {name:"iot"},
    {name:"iot"},
    {name:"iot"},
  ]

  return (
    <div className={classes.container}>
      <Typography variant="h4">Track Your IOT devices</Typography>
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
         <Grid container spacing={3} className={classes.list}>
            {iots?.map((_, i) => (
              <Grid  key={i} item xs={12}>
                <h4>hello</h4>
              </Grid>
            ))}
          </Grid>
        
        </>
      )}
    </div>
  );
};

export default List;