import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import TimelineComponent from './components/timelineComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './components/menu';
import KanbanComponent from './components/kanban';
import Tags from './components/tags';
import TagsComponent from './components/tags';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <Router>
    <div>
      <Menu />
      <hr />
      <Switch>
        <Route exact path="/"  />
        <Route path="/kanban" component={KanbanComponent} />
        <Route path="/Timeline" component={TimelineComponent} />
        <Route path="/Tags" component={TagsComponent} />
      </Switch>
    </div>
  </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
