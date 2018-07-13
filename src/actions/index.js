import axios from 'axios';
import { LIST_OF_CAKES } from './type';

const api = 'http://localhost:3001/api';	

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
    return async dispatch => {
        try {
            const response = await axios.put(`${api}/:${cakeId}`, data);
            const updatedCake = response.data;
            dispatch({
                type: LIST_OF_CAKES,
                updatedCake
            });
        } catch (error) {  
            return JSON.stringify(error)
        }
    }
}

export function deleteCake(cakeId) {
    return async dispatch => {
        try {
            const response = await axios.delete(`${api}/:${cakeId}`);
            const deletedCake = response.data;
            dispatch({
                type: LIST_OF_CAKES,
                deletedCake
            });
        } catch (error) {  
            return JSON.stringify(error)
        }
    }
}
