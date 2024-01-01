import React from 'react';
import ToastProvider from '../../context/ToastProvider';
import ToastPlayground from '../ToastPlayground';
import Footer from '../Footer';
import ToastShelf from '../ToastShelf/ToastShelf';

function App() {
  return (
    <ToastProvider>
      <ToastPlayground />
      <ToastShelf />
      <Footer />
    </ToastProvider>
  );
}

export default App;
