import { useEffect, useRef, useState } from 'react';
import { InitialValues, OnChangeArgs, Product } from '../interfaces/Interfaces';

interface useProductProps {
  counter: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  increaseBy: (value: number) => void;
  reset: () => void;
}

interface useProductArgs {
  product: Product;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProduct = ({
  product,
  onChange,
  value = 0,
  initialValues,
}: useProductArgs): useProductProps => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  const isMounted = useRef(false);

  const increaseBy = (value: number) => {
    const newValue = initialValues?.maxCount
      ? Math.min(Math.max(counter + value, 0), initialValues?.maxCount)
      : Math.max(counter + value, 0);

    setCounter(newValue);

    onChange && onChange({ count: newValue, product });
  };

  const reset = () => {
    setCounter(initialValues?.count || value);
  };

  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  return {
    counter,
    isMaxCountReached:
      !!initialValues?.count && initialValues?.maxCount === counter,
    maxCount: initialValues?.maxCount,
    increaseBy,
    reset,
  };
};
