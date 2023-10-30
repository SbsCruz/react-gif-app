import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";


describe('Tests in hook useFetchGifs', () => { 
    
    test('must return initial state', () => {

        const {result} = renderHook( () => useFetchGifs("Vini"))

        const {images, isLoading} = result.current

        expect(images.length).toBe(0);
        expect(isLoading).toBe(true);    

    });

    test('must return iamges array and isLoading must be false', async() => {

        const {result} = renderHook( () => useFetchGifs("Vini"))

        // es asincrona, es lo único que cambia con respecto al primer test
        await waitFor( () => 
        expect( result.current.images.length).toBeGreaterThan(0)
        );

        const {images, isLoading} = result.current

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBe(false);   




    });
 })