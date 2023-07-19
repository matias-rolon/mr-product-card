import * as React from 'react';
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest"
import { ProductTitle } from '../../src/components';

describe('ProductTitle', () => {

    afterEach(cleanup)

    it('render ProductTitle', () => {
        const wrapper = render(<ProductTitle title='hola' className='white-text' />)
        expect(wrapper).toMatchSnapshot()
    });

    it('render for parameter hello word', () => {
        render(<ProductTitle title='Hello world' className='white-text' />)
        const result = screen.getByText('Hello world')
        expect(result.classList.contains('white-text')).toBe(true)
    });

});