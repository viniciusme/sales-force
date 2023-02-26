import React from 'react';

import logo from './logo.svg';

const Header = () => {
  return (
    <>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edite o arquivo <code>src/App.tsx</code> e salve para recarregar.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </>
  );
};

export default Header;
