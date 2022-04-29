import { SET_POKEMON } from "./type"
import { CLEAR_ERROR } from "./type"
import { SET_ERROR } from "./type"

export const setPokemon = (payload)=>({
    type: SET_POKEMON,
    payload    
})
export const setError = (payload) => ({
    type: SET_ERROR,
    payload,
});

export const clearError = (payload) => ({
    type: CLEAR_ERROR,
    payload,
});