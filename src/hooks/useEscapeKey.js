import React from 'react';
function useEscapeKey(callback) {
  const handleEscapeKeypress = (event) => {
    if (event.keyCode === 27) {
      callback();
    }
  };
  React.useEffect(() => {
    document.addEventListener('keydown', handleEscapeKeypress);
    return () => {
      document.removeEventListener('keydown', handleEscapeKeypress);
    };
  });
}
export default useEscapeKey;
