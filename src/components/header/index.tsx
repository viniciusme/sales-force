import logoFavicon from './logo.svg';

const Header = () => {
  return (
    <>
      <header className='App-header'>
        <img src={logoFavicon} className='App-logo' alt='logo' />
      </header>
    </>
  );
};

export default Header;
