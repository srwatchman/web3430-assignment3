import React from 'react';
import ReactDOM from 'react-dom/client';
import Top10Movies from './components/Top10Movie';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/Header';
import Footer from './components/Footer';

let data = require('./top10.json')
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <div className='container'>
      <Header />
    <Top10Movies movies= { data }/>
    <Footer />
    </div>
  
  </React.StrictMode>
);

