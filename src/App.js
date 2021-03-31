import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import AppRouter from './routers/AppRouter';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <AppRouter />
    </Provider>
  );
}

export default App;
