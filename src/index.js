import React from 'react';
import ReactDOM from 'react-dom/client';
import Top10Movies from './components/Top10Movie';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/Header';
import Footer from './components/Footer';

let data = require('./top10.json')

export function parseDates(key, value) {
  const dateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:.*Z$/
  if (typeof value === 'string' && dateFormat.test(value)) {
    return new Date (value)
  }

  return value
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <div className='container'>
      <Header />
    <Top10Movies movies= { JSON.parse(JSON.stringify(data), parseDates) }/>
    <Footer />
    </div>
  
  </React.StrictMode>
);

