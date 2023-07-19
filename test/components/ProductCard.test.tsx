import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { ProductCard } from "../../src/components";
import React from "react";

const product = {
    id: '1',
    img: 'img.jpg',
    title: 'title'
}

describe('ProductCard', () => {

    afterEach(cleanup)

    it('render ProductCard', () => {
        const wrapper = render(<ProductCard product={product} children={function (): JSX.Element {
            throw new Error("Function not implemented.");
        } } />);
        expect(wrapper).toMatchSnapshot()
    });

    it('render ProductCard and children', () => {
        const wrapper = render(
            <ProductCard product={product}>
                {
                    () => (
                        <h1>childrenOk</h1>
                    )
                }
            </ProductCard>
        );

        screen.getAllByText('childrenOk')
        expect(wrapper).toMatchSnapshot();
    });

})