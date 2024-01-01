import React from 'react';
const useKeydown = (key, callback) => {
  const handleEscapeKeypress = (event) => {
    if (event.code === key) {
      callback();
    }
  };
  React.useEffect(() => {
    document.addEventListener('keydown', handleEscapeKeypress);
    return () => {
      document.removeEventListener('keydown', handleEscapeKeypress);
    };
  }, [key, callback]);
};
export default useKeydown;
