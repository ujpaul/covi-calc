import axios from "axios"
import { base_url } from "../../helper"
import * as tp from '../types'

export const continents= ()=> async (dispatch) => {
    
     dispatch({type: tp.FETCH_CONTINENT_REQUEST, loading: true})
    try {
        
        const { data  } = await axios.get(`${base_url}/continents?yesterday&sort`)      
        dispatch({type: tp.FETCH_CONTINENT_SUCCESS, data})

    } catch (error) {
        console.log(error.message)
    }
}