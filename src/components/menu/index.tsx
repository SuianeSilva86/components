// Menu.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => (
  <div>
    <ul className='flex gap-12'>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/timeline">Timeline</Link>
      </li>
      <li>
        <Link to="/kanban">Kanban</Link>
      </li>
    </ul>
  </div>
);

export default Menu;
