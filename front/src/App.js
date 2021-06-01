import Container from '@material-ui/core/Container';
import Bienvenido from "./components/Bienvenido";
import Carrito from './components/Carrito';
import Despacha from './components/Despacha';
import Paga from './components/Paga';
import Recibe from './components/Recibe';

import ReactJsonSyntaxHighlighter from 'react-json-syntax-highlighter';
import { useState } from 'react';



function App() {
  const [getSession, setSession] = useState({});
  return (
    <>
      <Container>
        <ReactJsonSyntaxHighlighter  obj={getSession}/>
      </Container>
      <Container>
        <Bienvenido setSession={setSession} />
        <Carrito data={getSession} setSession={setSession}></Carrito>
        <Despacha data={getSession} setSession={setSession}/>
        <Paga data={getSession} setSession={setSession}/>
        <Recibe data={getSession} setSession={setSession}/>
      </Container>
    </>
  );
}

export default App;
