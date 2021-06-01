import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from '@material-ui/core/Container';

import Bienvenido from "./components/Bienvenido";
import Carrito from './components/Carrito';
import Despacha from './components/Despacha';
import Paga from './components/Paga';
import Recibe from './components/Recibe';

import ReactJsonSyntaxHighlighter from 'react-json-syntax-highlighter';


function App() {
  const [getSession, setSession] = useState({});
  return (
    <>
      <Container>
        <ReactJsonSyntaxHighlighter obj={getSession} />
      </Container>
      <Container>
        <Router>
          <Switch>
            <Route path='/' exact render={(props) => <Bienvenido {...props} setSession={setSession} />} />
            <Route path='/carrito' exact render={(props) => <Carrito {...props} data={getSession} setSession={setSession} />} />
            <Route path='/despacha' exact render={(props) => <Despacha {...props} data={getSession} setSession={setSession} />} />
            <Route path='/paga' exact render={(props) => <Paga {...props} data={getSession} setSession={setSession} />} />
            <Route path='/recibe' exact render={(props) => <Recibe {...props} data={getSession} setSession={setSession} />} />
          </Switch>
        </Router>
      </Container>
    </>
  );
}

export default App;
