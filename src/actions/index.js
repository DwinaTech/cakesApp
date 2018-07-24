import axios from 'axios';
import { LIST_OF_CAKES, FAVORITE_CAKES } from './type';

let envApi = process.env.REACT_APP_API;
envApi = envApi ? envApi.replace(/[%22]/g, '') : null;
const api = envApi || 'http://localhost:3001/api';	

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
            let errMessage = JSON.stringify(error);
            errMessage = JSON.parse(errMessage).response.data;
            return errMessage
        }
    }
}

export function addCake(data) {
    return async () => {
        try {
            const response = await axios.post(`${api}/cakes`, data);
            return response.data;
        } catch (error) {  
            let errMessage = JSON.stringify(error);
            errMessage = JSON.parse(errMessage).response.data;
            return errMessage
        }
    }
}


export function editCake(data, cakeId) {
    return async () => {
        try {
            const response = await axios.put(`${api}/cakes/${cakeId}`, data);
            return response.data;
        } catch (error) {  
            let errMessage = JSON.stringify(error);
            errMessage = JSON.parse(errMessage).response.data;
            return errMessage
        }
    }
}

export function deleteCake(cakeId) {
    return async () => {
        try {
            const response = await axios.delete(`${api}/cakes/${cakeId}`);
            return response.data;
        } catch (error) {  
            let errMessage = JSON.stringify(error);
            errMessage = JSON.parse(errMessage).response.data;
            return errMessage
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
            let errMessage = JSON.stringify(error);
            errMessage = JSON.parse(errMessage).response.data;
            return errMessage
        }
    }
}

export function addFavoritecake(data) {
    return async () => {
        try {
            const response = await axios.post(`${api}/favoritecakes`, data);
            return response.data;
        } catch (error) {  
            let errMessage = JSON.stringify(error);
            errMessage = JSON.parse(errMessage).response.data;
            return errMessage
        }
    }
}

export function deleteFavoriteCake(cakeId) {
    return async () => {
        try {
            const response = await axios.delete(`${api}/favoritecakes/${cakeId}`);
            return response.data;
        } catch (error) {  
            let errMessage = JSON.stringify(error);
            errMessage = JSON.parse(errMessage).response.data;
            return errMessage
        }
    }
}
