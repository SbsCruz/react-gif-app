import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";


describe('tests in <GifExpertApp/>', () => { 
    

    test('must render ', () => {

        const onAddCategory = jest.fn()

        render(<GifExpertApp onAddCategory={onAddCategory} />)
        
    });
 })