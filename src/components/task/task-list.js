import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import TaskCard from './task'

export default class TaskList extends Component {
  render() {
    return (
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </Grid>
    )
  }
}
