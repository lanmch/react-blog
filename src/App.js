import React from 'react';
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import homepage from './routes/homepage/homepage'
import pageb from './components/pageb'
function App() {
  return (
    <BrowserRouter>

        <Route path='/' exact component={homepage}/>
        <Route path='/b' exact component={pageb}/>

    </BrowserRouter>
  );
}

export default App;
