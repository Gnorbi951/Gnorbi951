import React, {createContext} from 'react';

const PokeContext = createContext(null);

export const PokeProvider = ({children}) => {

    const [pokemons, setPokemons] = useState([]);
    const [detailedPokemons, setDetailedPokemons] = useState([]);

    useEffect(() => {
        axios.get(`http://pokeapi.com/...`).
            .then(res => setPokemons(res.data));
    }, []);

    useEffect(() => {
        pokemons.forEach(element => {
            axios.get(`http://pokeapi.com/${element.id}`)
                 .then(res => setDetailedPokemons([...detailedPokemons, res.data]));
        });
    }, [pokemons]);

    return (
        <PokeContext.Provider value={{pokemons, detailedPokemons}}>
            {children}
        </PokeContext.Provider>
    )
}
