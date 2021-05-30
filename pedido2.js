
const axios = require('axios');

let state;
let newPedido = {}
let pedido = {}


const getConfigMachine = async () => {
  pedido = await axios.get('http://localhost:5000/pedido').then((res) => {
    Object.keys(res.data).map((key) => {
      if (res.data[key].VALIDATION && res.data[key].VALIDATION.FN) {
        res.data[key].VALIDATION.FN = eval("(" + res.data[key].VALIDATION.FN + ")")
      }
    })
    return res.data
  });
  console.log("config: ", pedido);
}

const getActiveSession = async () => {
  newPedido = await axios.get('http://localhost:5000/orders?_sort=id&_limit=1&_order=desc&finish_like=false').then((res) => {
    if (res.data.length) {
      return res.data.pop();
    } else {
      return {};
    }
  });
}

const isFinishSessionClose = async () => {
  if (newPedido.pago && newPedido.recibido && !newPedido.finish) {
    axios.patch('http://localhost:5000/orders/' + newPedido.id, { finish: true })
  }
}

const fmsPedido = async (start = pedido.START) => {
  await getActiveSession();
  setTimeout(() => {
    if (pedido[start].VALIDATION.FN(newPedido)) {
      state = pedido[start].TRANSITION
      fmsPedido(pedido[start].TRANSITION)
    } else {
      console.log('\x1b[36m%s\x1b[0m', pedido[start].VALIDATION.ERROR);
      fmsPedido(start)
    }
  }, 2000)
}

const mostrarEstado = (estado = pedido.START) => {
  isFinishSessionClose();
  console.log("Estamos viendo ", estado);
  setTimeout(() => {
    mostrarEstado(state);
  }, 2000);
}


const initMachine = async () => {
  await getConfigMachine();
  await getActiveSession();
  fmsPedido();
  mostrarEstado();
};

initMachine();


