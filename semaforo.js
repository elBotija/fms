const semaforo = {
  START: 'VERDE',
  VERDE: {
    TIME: 2000,
    COLOR: 'AMARILLO',
  },
  AMARILLO: {
    TIME: 1000,
    COLOR: 'ROJO',
  },
  ROJO: {
    TIME: 4000,
    COLOR: 'VERDE',
  },
  DIA: 1,
  NOCHE: 2,
}

let state;
let dayTime = 'DIA';

const dayController = () => {
  console.log("dayTime ", dayTime);
  setTimeout(() => {
    dayTime = dayTime === 'DIA' ? 'NOCHE' : 'DIA';
    dayController();
  }, 30000)
}

const fmsSemaforo = (start = semaforo.START) => {
  console.log("Color Actual--> ",start);
  setTimeout(() => {
    state = semaforo[start].COLOR;
    fmsSemaforo(state)
  }, semaforo[start].TIME * semaforo[dayTime])
}

dayController();
fmsSemaforo();