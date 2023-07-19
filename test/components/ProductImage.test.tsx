import { cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { ProductImage } from "../../src/components";
import React from "react";


describe('ProductImg', () => {

    afterEach(cleanup);

    it('render for ProductImg', () => {
        const wrapper = render(<ProductImage img="img.jpg" />)
        expect(wrapper).toMatchSnapshot()
    });


});