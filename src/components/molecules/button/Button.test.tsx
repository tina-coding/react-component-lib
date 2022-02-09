import React from 'react';
import { render } from "@testing-library/react";
import Button from './Button';

describe("button", () => { 
    test("renders the button component", () => { 
        render(<Button label="hello world" />);
    })
})