import { screen,render } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";
jest.mock("../../src/hooks/useFetchGifs")


describe('test in <GifGrid/>', () => { 

    const cat = "Vini";
    
    test('must show Loading...', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        })

        render(<GifGrid category={cat}/>)

        expect(screen.getByText("Cargando..."))
        expect(screen.getByText(cat))
    });

    test('must show items when using useFetchGifs', () => {

        const gifs = [{
            id: 'abc',
            title: "vini",
            url: "https://vini.com"
        },
    
        {
            id: '123',
            title: "Rodry",
            url: "https://rodry.com"
        }]


        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        })

        render(<GifGrid category={cat}/>)
        
        expect(screen.getAllByRole('img').length).toBe(2)

        
    });

 })