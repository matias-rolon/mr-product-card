import styles from '../styles/styles.module.css'
import React, { createContext } from 'react';
import { useProduct } from '../hooks/useProduct';
import { InitialValue, Product, ProductCardHandlers, ProductContextProps, onChangeArgs } from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    product: Product;
    // children?: ReactElement | ReactElement[];
    children: ( args: ProductCardHandlers) => JSX.Element
    className?: string;
    style?: React.CSSProperties;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValue?: InitialValue
}

export const ProductCard = ({ children, product, className, style, onChange, value, initialValue }: Props) => {

    const { counter, increaseBy, maxCounter, isMaxCountReached, reset } = useProduct({ onChange, product, value, initialValue })

    return (
        <Provider value={{
            product,
            counter,
            increaseBy,
            maxCounter
        }}>
            <div style={style} className={`${styles.productCard} ${className}`}>

                {
                    children({
                        count: counter,
                        isMaxCountReached,
                        maxCount: initialValue?.maxCount,
                        product, 
                        increaseBy,
                        reset,
                    })
                }

            </div>
        </Provider>
    )
}