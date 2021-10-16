import React from 'react';
import ReactDOM from 'react-dom';
import Pet from './Pet';

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', { id: 'my-brand' }, 'Adopt Me!'),
    // ...[1, 2, 3, 4].map((i) => React.createElement('h2', {}, i)),
    React.createElement(Pet, {
      name: 'Luna',
      animal: 'Dog',
      breed: 'Havanese',
    }),
    React.createElement(Pet, {
      name: 'Pepper',
      animal: 'Bird',
      breed: 'Cockatiel',
    }),
    React.createElement(Pet, {
      name: 'Sudo',
      animal: 'Dog',
      breed: 'Wheaten Terrier',
    }),
  ]);
};
ReactDOM.render(React.createElement(App), document.getElementById('root'));
