import React from 'react'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import { handlerUnits } from '../actions/sessions';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Carrito = ({ data, setSession }) => {
  const _handlerUnits = async (n) => {
    const res = await handlerUnits(data, n);
    setSession(res);
  }
  
  const classes = useStyles();
  return (
    <>
      <h1>Carrito!</h1>
      <div className={classes.root}>
        Cantidad de Articulos: {data.cantidad}
        <Button variant="contained" color="primary" onClick={()=>_handlerUnits(-1)}>Resta</Button>
        <Button variant="contained" color="primary" onClick={()=>_handlerUnits(1)}>Suma</Button>
        <Button variant="contained" color="secondary" onClick={() => _handlerUnits(data.carrito * -1)}><DeleteIcon /></Button>
      </div>
    </>
  );
}

export default Carrito;