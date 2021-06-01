import React from 'react'
import Button from '@material-ui/core/Button';
import { createSession } from '../actions/sessions';

const Bienvenido = ({setSession, history}) => {
  const handelerSession = async () => {
    const data = await createSession();
    await setSession(data);
    history.push('/carrito')
  }
  return (
    <>
      <h1>Bienvendio a tu shop</h1>
      <Button variant="contained" color="primary" onClick={handelerSession}>Entrar</Button>
    </>
  );
}

export default Bienvenido;