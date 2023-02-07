import Pokemones, {getStaticProps} from '../pages/index'
import {render, screen} from '@testing-library/react'


describe('Index',()=>{
    describe('Component',()=>{
        it('se renderiza',() => {
            const {getByTestId} = render(
                <Pokemones pokemones={[{name: 'Chanchito feliz', url: '/pokemon/detalle/1'}]}/>
            )

            //const paragraph = screen.getByText('Mi app de Pokemones')
            const paragraph = getByTestId('titulo')
            //console.log(paragraph.innerHTML)
            expect(paragraph).toBeInTheDocument()

            const chanchito = screen.getByText("Chanchito feliz")
            //console.log(chanchito.getAttribute('href'))

            expect(chanchito).toBeInTheDocument
            const url = chanchito.getAttribute('href')
            expect(url).toEqual('pokemones/1')
        })
    })
    describe('getStaticProps',  ()=> {
        it('retur pokemones', async () => {
            global.fetch = jest.fn()
                .mockImplementation(url => {
                    expect(url).toBe('https://pokeapi.co/api/v2/pokemon?limit=151')
                    return new Promise(resolve=>{
                        resolve({
                            json: () => Promise.resolve({
                                results: 'lista de pokemones'
                            })
                        })
                    })
                })
            const {props} = await getStaticProps()
            expect(props.pokemones).toBe('lista de pokemones')
        })
    })

})