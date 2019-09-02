
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Link, Route } from 'react-router-dom';
// import DialogExample from './lib/dialog/dialog.example';

// import './example.styl';
import IconDemo from '../lib/icon/icon.example';
import ButtonDemo from '../lib/button/button'
// import FormExample from './lib/form/form.example';
// import ScrollExample from './lib/scroll/scroll.example';


ReactDOM.render(
  <Router>
    <header>
      <div className="logo">
        Zona-UI
      </div>
    </header>
    <div>
      <aside>
        <h2>组件</h2>
        <ul>
          <li>
            <Link to="/Icon">icon</Link>
          </li>
          <li>
            <Link to="/Button">button</Link>
          </li>
        </ul>
      </aside>
      <main>
        <Route path="/Icon" component={IconDemo}></Route>
        <Route path="/Button" component={ButtonDemo}></Route>
      </main>
    </div>
  </Router>
  , document.querySelector('#root'));