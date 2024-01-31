import { CSSProperties, useCallback, useContext } from 'react';
import { ProductContext } from './ProductCard';
import React from 'react';
import styles from '../styles/styles.module.css';

export interface Props {
  className?: string;
  style?: CSSProperties;
}

export function ProductButtons({ className, style }: Props) {
  const { counter, increaseBy, maxCount } = useContext(ProductContext);

  const isMaxReached = useCallback(() => !!maxCount && counter === maxCount, [
    counter,
    maxCount,
  ]);

  return (
    <div style={style} className={`${styles.buttonsContainer} ${className}`}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button
        className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`}
        disabled={isMaxReached.call(isMaxReached).valueOf()}
        onClick={() => increaseBy(1)}
      >
        +
      </button>
    </div>
  );
}

export default ProductButtons;
