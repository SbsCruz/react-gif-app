import { getGIFs } from "../../src/helpers/getGifs";

describe('test in getGifs', () => { 
    test('must return a gif array', async() => {

        const gifs = await getGIFs('Real Madrid')
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url  : expect.any(String), 
        });
        
    });
 })