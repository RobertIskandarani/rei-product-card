import { CSSProperties, useContext } from 'react';
import { ProductContext } from './ProductCard';
import React from 'react';
import styles from '../styles/styles.module.css';

export interface Props {
  className?: string;
  style?: CSSProperties;
  title?: string;
}

export function ProductTitle({ title, className, style }: Props) {
  const { product } = useContext(ProductContext);

  return (
    <span style={style} className={`${styles.productDescription} ${className}`}>
      {title ? title : product.title}
    </span>
  );
}

export default ProductTitle;
