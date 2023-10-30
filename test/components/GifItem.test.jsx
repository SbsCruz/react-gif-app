import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Prueba en <GifItem/>', () => {
    
    const titulo = "Titulo-Normal"
    const link = "http://gifnormal/frankocean.gif"

    test('debe hacer match con el snapshot', () => {

        const {container} = render(<GifItem  title={titulo} url={link}/>)
        expect(container).toMatchSnapshot();

    })
    
    test('debe mostar la imagen con el URL y el ALT indicado', () => {

        render(<GifItem  title={titulo} url={link}/>)
        // expect(screen.getByRole('img').src).toBe(link);
        // expect(screen.getByRole('img').alt).toBe(titulo);

        const {src,alt} = screen.getByRole("img")
        expect(src).toBe(link);
        expect(alt).toBe(titulo);
    });

    test('debe mostar el titulo del componente', () => {
        render(<GifItem  title={titulo} url={link}/>)
        expect(screen.getByText(titulo)).toBeTruthy();

    });

 })