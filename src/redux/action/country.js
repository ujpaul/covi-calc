import axios from "axios"
import { base_url } from "../../helper"
import * as tp from '../types'


export const country= (country)=> async (dispatch) => {
    
     dispatch({type: tp.FETCH_COUNTRY_REQUEST, loading: true})
    try {
        const { data  } = await axios.get(`${base_url}/countries/${country}`)        
        dispatch({type: tp.FETCH_COUNTRY_SUCCESS, data})

    } catch (error) {
        console.log(error.message)
    }
}