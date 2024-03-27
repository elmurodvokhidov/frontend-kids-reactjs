import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'
import todoSlice from './redux/slice/todoSlice.js'
import { Provider } from 'react-redux'

const store = configureStore({
    reducer: {
        todo: todoSlice,
    }
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
)
