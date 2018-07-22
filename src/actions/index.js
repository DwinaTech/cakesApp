import axios from 'axios';
import { LIST_OF_CAKES, FAVORITE_CAKES } from './type';

const api = process.env.REACT_APP_API || 'http://localhost:3001/api';	

export function getListOfCakes() {
    return async dispatch => {
        try {
            const response = await axios.get(`${api}/cakes`);
            const listOfCakes = response.data;
            dispatch({
                type: LIST_OF_CAKES,
                listOfCakes
            });
        } catch (error) {  
            return JSON.stringify(error)
        }
    }
}

export function addCake(data) {
    return async dispatch => {
        try {
            const response = await axios.post(`${api}/cakes`, data);
            const savedCake = response.data;
            dispatch({
                type: LIST_OF_CAKES,
                savedCake
            });
        } catch (error) {  
            return JSON.stringify(error)
        }
    }
}


export function editCake(data, cakeId) {
    return async () => {
        try {
            const response = await axios.put(`${api}/cakes/${cakeId}`, data);
            return response.data;
        } catch (error) {  
            return JSON.stringify(error)
        }
    }
}

export function deleteCake(cakeId) {
    return async () => {
        try {
            const response = await axios.delete(`${api}/cakes/${cakeId}`);
            return response.data;
        } catch (error) {  
            return JSON.stringify(error)
        }
    }
}

export function getFavoriteCakes() {
    return async dispatch => {
        try {
            const response = await axios.get(`${api}/favoritecakes`);
            const favoriteCakes = response.data;
            dispatch({
                type: FAVORITE_CAKES,
                favoriteCakes
            });
        } catch (error) {  
            return JSON.stringify(error)
        }
    }
}

export function addFavoritecake(data) {
    return async () => {
        try {
            const response = await axios.post(`${api}/favoritecakes`, data);
            return response.data;
        } catch (error) {  
            return JSON.stringify(error)
        }
    }
}

export function deleteFavoriteCake(cakeId) {
    return async () => {
        try {
            const response = await axios.delete(`${api}/favoritecakes/${cakeId}`);
            return response.data;
        } catch (error) {  
            return JSON.stringify(error)
        }
    }
}
