import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';


import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from "./theme"
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <ChakraProvider theme={theme}>
  //   <ColorModeScript initialColorMode={theme.config.initialColorMode} />
  //   <Provider store={store}>
  //     <App/>
  //   </Provider>
  // </ChakraProvider>
  <BrowserRouter>
   <App/>
  </BrowserRouter>
 
);

reportWebVitals();
