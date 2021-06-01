import React from 'react'
import Button from '@material-ui/core/Button';
import { updateBoolean } from '../actions/sessions';
import { next } from './Next';

const Recibe = ({ data, setSession, history }) => {
  const _deliver = async () => {
    const res = await updateBoolean(data, 'recibido');
    setSession(res);
  }
  return (
    <>
      <h1>Recibe!</h1>
      {data.recibido && <p>Orden recibida!!!</p>}
      <Button variant="contained" color="primary" onClick={() => _deliver()}>{data.recibido ? 'Devolver' : 'Recibir'}</Button>
      {next(history, '/')}
    </>
  );
}

export default Recibe;