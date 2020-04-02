import React from 'react';
import propTypes from 'prop-types';
import { ConnectedRouter } from 'connected-react-router';
import routes from './routes';
// import logo from './logo.svg';
import './App.css';
// import Header from './Components/Header/Header';

const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      { routes }
    </ConnectedRouter>
  )
}

App.propTypes = {
  history: propTypes.object,
}

// function App() {
//   return (
//     <div className="App">
//       <Header />
//     </div>
//   );
// }

export default App;
