import React from 'react'
import Button from '@material-ui/core/Button';
import { updateBoolean } from '../actions/sessions';
import { next } from './Next';

const Paga = ({ data, setSession, history }) => {
  const _paid = async () => {
    const res = await updateBoolean(data, 'pago');
    setSession(res);
  }
  return (
    <>
      <h1>Paga!</h1>
      {data.pago && <p>Orden pagada!!!</p>}
      <Button variant="contained" color="primary" onClick={() => _paid()}>{data.pago ? 'Nota de Credito' : 'Pagar'}</Button>
      {next(history, '/recibe')}
    </>
  );
}

export default Paga;