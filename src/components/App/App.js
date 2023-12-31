import React from 'react';

import ToastPlayground from '../ToastPlayground';
import Footer from '../Footer';
import ToastShelf from '../ToastShelf/ToastShelf';

export const ToastContext = React.createContext();

const defaultToast = [
  {
    id: 0,
    message: '',
    variant: 'notice',
    visible: false,
  },
];
function App() {
  const [toast, setToast] = React.useState(defaultToast);

  const hideToast = (id) => {
    setToast(
      toast.map((toastItem) =>
        toastItem.id === id ? { ...toastItem, visible: false } : toastItem
      )
    );
  };

  const value = { toast, setToast, hideToast };
  return (
    <ToastContext.Provider value={value}>
      <ToastPlayground />
      <ToastShelf />
      <Footer />
    </ToastContext.Provider>
  );
}

export default App;
