import { render,screen, fireEvent } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('test in <AddCategory/>', () => { 
    test('must change textBox value', () => {
        
        render(<AddCategory onNewCategory={()=>{}}/>);
        const input = screen.getByRole("textbox");
        fireEvent.input(input,{target: {value: "Frank Ocean"}})

        expect(input.value).toBe("Frank Ocean");
    });

    test('must call OnNewCategory if input has value', () => {
        const inputValue = "Vini";
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory}/>);

        const input = screen.getByRole("textbox");
        const form  = screen.getByRole("form");

        fireEvent.input(input,{target: {value: inputValue}})
        fireEvent.submit(form)

        expect(input.value).toBe("");

        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
      
        
    });


    test('must not call OnNewCategory if input has no value', () => {
        // primero definimos la función de jest
        const onNewCategory = jest.fn();

        // definimos el objeto de prueba
        render(<AddCategory onNewCategory={onNewCategory}/>)

        // apuntamos a los elementos del componente
        const input = screen.getByRole("textbox")
        const form = screen.getByRole("form");

        // disparamos los eventos que nos interesan
        fireEvent.input(input,{target:{value:""}})
        fireEvent.submit(form)

        expect(onNewCategory).toHaveBeenCalledTimes(0)

    });
 })