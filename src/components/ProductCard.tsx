import {
  InitialValues,
  OnChangeArgs,
  Product,
  ProductCardHandlers,
  ProductContextProps,
} from '../interfaces/Interfaces';
import { CSSProperties, createContext } from 'react';
import { useProduct } from '../hooks/useProduct';
import React from 'react';
import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  // children?: ReactElement | ReactElement[];
  children?: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  product: Product;
  style?: CSSProperties;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export function ProductCard({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValues,
}: Props) {
  const {
    counter,
    maxCount,
    isMaxCountReached,
    increaseBy,
    reset,
  } = useProduct({
    product,
    onChange,
    value,
    initialValues,
  });

  return (
    <Provider
      value={{
        counter,
        maxCount,
        product,
        increaseBy,
      }}
    >
      <div style={style} className={`${styles.productCard} ${className}`}>
        {children &&
          children({
            count: counter,
            isMaxCountReached: isMaxCountReached,
            maxCount: maxCount,
            product: product,
            increaseBy: increaseBy,
            reset,
          })}
      </div>
    </Provider>
  );
}

export default ProductCard;
