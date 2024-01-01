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
    // change visibility if you need to keep track of toasts

    // setToast(
    //   toast.map((toastItem) =>
    //     toastItem.id === id ? { ...toastItem, visible: false } : toastItem
    //   )
    // );

    // remove toast from state if you don't need to keep track of toasts

    const nextToasts = toast.filter((toastItem) => {
      return toastItem.id !== id;
    });

    setToast(nextToasts);
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
