import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import homepage from './routes/homepage/homepage'
import aboutme from './routes/aboutme/aboutme'
import pigeonhole from './routes/pigeonhole/pigeonhole'
import tags from './routes/tags/tags'
import article from './routes/ariticle/article'
function App() {
  return (
    <BrowserRouter>
        <Route path='/' exact component={homepage}/>
        <Route path='/aboutme' exact component={aboutme}/>
        <Route path='/pigeonhole' exact component={pigeonhole} />
        <Route path='/tags' exact component={tags} />
        <Route path='/article' exact component={article} />
    </BrowserRouter>
  );
}

export default App;
