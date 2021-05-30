const pedido = {
  START: 'BIENVENIDO',
  BIENVENIDO: {
    TRANSITION: 'CARRITO',
  },
  CARRITO: {
    AGREGA: 1,
    QUITA: -1,
    BORRA: 0,
    TRANSITION: 'DESPACHA',
    VALIDATION: {
      ERROR: 'No tiene articulos',
      FN: (data)=> (data.carrito > 0),
    },
  },
  DESPACHA: {
    CONFIRMA:{
      DIRECCION: true,//require
      HORA: false,
    },
    TRANSITION: 'PAGA',
    VALIDATION: {
      ERROR: 'No se puede despachar, agregue la direccion',
      FN: (data)=> (data.direccion.length),
    },
  },
  PAGA:{ 
    PAGO: true,//require
    TRANSITION: 'RECIBE',
    VALIDATION: {
      ERROR: 'No se recibio el pago',
      FN: (data)=> (data.pago),
    },
  },
  RECIBE: {
    RECIBIDO: true, //require
    TRANSITION: 'BIENVENIDO',
    VALIDATION: {
      ERROR: 'No se pudo entregar la orden todavia',
      FN: (data)=> (data.recibido),
    },
  },
}

let state;
let newPedido = {
  carrito: 0,
  direccion: '',
  hora: '',
  pago: false,
  recibido: false,
}

const fmsPedido = (start=pedido.START) => {
  // console.log("fmsPedido")
 setTimeout(()=>{
   if(!pedido[start].VALIDATION || pedido[start].VALIDATION.FN(newPedido)){
      state = pedido[start].TRANSITION
      fmsPedido(pedido[start].TRANSITION)
    }else{
      console.log('\x1b[36m%s\x1b[0m',pedido[start].VALIDATION.ERROR);
     fmsPedido(start)
   }
 },2000)
}

const mostrarEstado = (estado = pedido.START) => {
  console.log("Estamos viendo ", estado);
  setTimeout(()=>{
    mostrarEstado(state);
  }, 2000);
}

const carritoHandler = (action = 'AGREGA') => {
  newPedido.carrito = action === 'BORRA' ? 0 : newPedido.carrito + pedido.CARRITO[action];
}

fmsPedido();
mostrarEstado()

const testMachine = () => {
  setTimeout(()=>{
    console.log('\x1b[33m%s\x1b[0m', 'Agrega articulo');
    carritoHandler('AGREGA');
  },6000)
  setTimeout(()=>{
    console.log('\x1b[33m%s\x1b[0m', 'Agrega Direccion');
    newPedido.direccion = "av siempre viva";
  },10000)
  setTimeout(()=>{
    console.log('\x1b[33m%s\x1b[0m', 'Paga la orden');
    newPedido.pago = true;
  },14000)
  setTimeout(()=>{
    console.log('\x1b[33m%s\x1b[0m','Recibe el pedido');
    newPedido.recibido = true;
  },18000)
  setTimeout(()=>{
    console.log('Orden terminada: ', newPedido);
    newPedido = {
      carrito: 0,
      direccion: '',
      hora: '',
      pago: false,
      recibido: false,
    }
    testMachine();
  },20000)
}
testMachine();