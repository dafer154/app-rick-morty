import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api/';

export function allCharacters(){

    const character = 'character';
    axios.get(`${BASE_URL}${character}`)
          .then(res => {
            return this.setState({
                characters: res.data
            });
          });
};

export const BASE_NAME = 'http://localhost:3000/';

