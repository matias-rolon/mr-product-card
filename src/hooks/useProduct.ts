import { useEffect, useRef, useState } from "react"
import { InitialValue, Product, onChangeArgs } from "../interfaces/interfaces"

interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number
    initialValue?: InitialValue
}

export const useProduct = ({ onChange, product, value = 0, initialValue }: useProductArgs) => {

    const isMounted = useRef(false);

    const [counter, setCounter] = useState(initialValue?.count || value)

    const increaseBy = (value: number) => {

        let newValue = Math.max(counter + value, 0)

        if (initialValue?.maxCount) {
            newValue = Math.min(newValue, initialValue.maxCount);
        }

        setCounter(newValue);

        onChange && onChange({ count: newValue, product });
    }

    const reset = () => {
        setCounter(initialValue?.count || value)
    }

    useEffect(() => {
        if (!isMounted.current) return;
        setCounter(value);
    }, [value])





    return {
        counter,
        isMaxCountReached: !!initialValue?.count && initialValue.maxCount === counter,
        maxCounter: initialValue?.maxCount,

        increaseBy,
        reset,

    }
}