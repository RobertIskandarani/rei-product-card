import { ProductContext } from './ProductCard';
import { CSSProperties, useContext } from 'react';
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';
import React from 'react';

export interface Props {
  className?: string;
  img?: string;
  style?: CSSProperties;
}

export function ProductImage({ img = '', className, style }: Props) {
  const { product } = useContext(ProductContext);
  let imgToShow: string;

  if (img) {
    imgToShow = img;
  } else if (product.img) {
    imgToShow = product.img;
  } else {
    imgToShow = noImage;
  }

  return (
    <img
      style={style}
      className={`${styles.productImg} ${className}`}
      src={imgToShow}
      alt="Producto"
    />
  );
}

export default ProductImage;
