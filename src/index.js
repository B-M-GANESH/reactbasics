import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userReducer from './Redux/features/user'
import themeReducer from './Redux/features/theme'
const store = configureStore({
    reducer:{
        user:userReducer,
        theme:themeReducer

    }
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store={store}>
   <App />
    </Provider>
);

