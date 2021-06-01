import axios from 'axios';

export const createSession = async () => {
  const json = {
    carrito: 0,
    direccion: '',
    hora: '',
    pago: false,
    recibido: false,
    finish: false,
  };
  const res = await axios.post('http://localhost:5000/orders', json).then((res) => {
    return res.data
  })
    .catch((error) => {
      return { error: true }
    });
  return res;
}

export const handlerUnits = async (data, n) => {
  const json = { carrito: data.carrito + n }
  const res = await axios.patch('http://localhost:5000/orders/' + data.id, json).then((res) => {
    return res.data
  })
    .catch((error) => {
      return { error: true }
    });
  return res;
}

export const setAdress = async (data, update) => {
  const res = await axios.patch('http://localhost:5000/orders/' + data.id, update).then((res) => {
    return res.data
  })
    .catch((error) => {
      return { error: true }
    });
  return res;
}

export const updateBoolean = async (data, key) => {
  const res = await axios.patch('http://localhost:5000/orders/' + data.id, {[key]: !data[key]}).then((res) => {
    return res.data
  })
    .catch((error) => {
      return { error: true }
    });
  return res;
}