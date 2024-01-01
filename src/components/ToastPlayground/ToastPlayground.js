import React from 'react';

import { ToastContext } from '../../context/ToastProvider';

import Button from '../Button';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const { toast, setToast } = React.useContext(ToastContext);
  const [variant, setVariant] = React.useState('notice');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMessage = event.target.message.value;
    const newToast = {
      id: toast.length,
      message: newMessage,
      variant: variant,
      visible: true,
    };
    setToast([...toast, newToast]);
    return (event.target.message.value = '');
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img
          alt='Cute toast mascot'
          src='/toast.png'
        />
        <h1>Toast Playground</h1>
      </header>

      <form
        className={styles.controlsWrapper}
        onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label
            htmlFor='message'
            className={styles.label}
            style={{ alignSelf: 'baseline' }}>
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id='message'
              className={styles.messageInput}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((inputVariant) => {
              return (
                <label
                  key={`variant-${inputVariant}`}
                  htmlFor={`variant-${inputVariant}`}>
                  <input
                    id={`variant-${inputVariant}`}
                    type='radio'
                    name='variant'
                    value={inputVariant}
                    checked={variant === inputVariant}
                    onChange={(event) => setVariant(event.target.value)}
                  />
                  {inputVariant}
                </label>
              );
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
