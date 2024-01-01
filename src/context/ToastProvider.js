import React from 'react';
import useKeydown from '../hooks/useKeydown';

export const ToastContext = React.createContext();

const defaultToast = [
  {
    id: 0,
    message: '',
    variant: 'notice',
    visible: false,
  },
];

function ToastProvider({ children }) {
  const [toast, setToast] = React.useState(defaultToast);

  const handleEscape = React.useCallback(() => {
    setToast([]);
  }, []);
  useKeydown('Escape', handleEscape);

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
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
