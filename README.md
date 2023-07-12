# 1. MR-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### 1.0.1. Matias Rolon

## 1.1. Ejemplo

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'mr-product-card'
```

```
<ProductCard
    product={product}
    initialValue={{
        count: 4,
        maxCount: 10,
    }}
>

    {
        ({ reset, increaseBy, count, isMaxCountReached }) => (
            <>
                <ProductImage/>
                <ProductTitle/>
                <ProductButtons/>
            </>
        )
    }

</ProductCard>

```
