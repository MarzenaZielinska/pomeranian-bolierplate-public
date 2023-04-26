import React from 'react';

import './styles/header.css';
import { Link } from 'react-router-dom';

export function AppHeader() {
  return (
    <header>
      <div>
        <Link to="/">
          <Logo  /

        </Link>
        />
      </div>
    </header>
  );
}
