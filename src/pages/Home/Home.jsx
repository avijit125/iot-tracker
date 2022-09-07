import { CssBaseline, Grid } from '@material-ui/core'
import React from 'react'
import Header from '../../components/Header/Header'
import List from '../../components/List/List'
import Map from '../../components/Map/Map'


const Home = () => {
  return (
    <>
    <CssBaseline/>
    <Header/>
    <Grid container spacing={3} style={{width: '100%'}}>
        <Grid item xs={12} md={4} lg={3}>
            <List/>
        </Grid>
        <Grid item xs={12} md={4} lg={9}>
            <Map/>
        </Grid>
    </Grid>
    </>
  )
}

export default Home