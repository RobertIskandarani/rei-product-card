# REI-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Roberto Ezequiel Iskandarani

## Ejemplo

```tsx
import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from 'rei-product-cards';
```

```tsx
<ProductCard
  product={product}
  initialValues={{
    count: 4,
    maxCount: 10,
  }}
>
  {({ count, isMaxCountReached, maxCount, reset, increaseBy }) => (
    <>
      <ProductImage />
      <ProductTitle />
      <ProductButtons />
    </>
  )}
</ProductCard>
```
