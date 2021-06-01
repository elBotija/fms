import React from 'react'
import Button from '@material-ui/core/Button';

export const next = (history, route) => {
  return (
    <Button variant="contained" color="primary" onClick={() => history.push(route)}>Siguiente</Button>
  )
}