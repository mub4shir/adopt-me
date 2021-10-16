// import React from 'react';  babel imports react for u cause it encounters jsx
import ReactDOM from 'react-dom';
//import Pet from './Pet';
import SearchParams from './SearchParams';

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      {/* <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Peeper" animal="Bird" breed="Cocatiel" />
      <Pet name="Sudo" animal="Dog" breed="Weaten Terrier" /> */}
      <SearchParams />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
