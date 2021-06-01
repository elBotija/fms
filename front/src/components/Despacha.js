import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { setAdress } from '../actions/sessions';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const Despacha = ({ data, setSession }) => {
  const [direccion, setDireccion] = useState(data.direccion);
  const [hora, setHora] = useState(data.hora);

  const classes = useStyles();
  
  const _updateAdress = async () => {
    const res = await setAdress(data, { direccion, hora });
    setSession(res);
  }
  return (
    <>
      <h1>Despacha!</h1>
      <div className={classes.root} >
        Ingrese los datos de entrega
        <form className={classes.root} noValidate autoComplete="off">
          <div>
            <TextField required id="standard-required" size="small" label="Direccion" defaultValue={data.direccion} onChange={e => setDireccion(e.target.value)} />
            <TextField id="standard" label="Horario" size="small" defaultValue={data.hora} onChange={e => setHora(e.target.value)} />
          </div>
          <Button variant="contained" color="primary" onClick={() => _updateAdress()}>Actualizar</Button>
        </form>
      </div>
    </>
  );
}

export default Despacha;