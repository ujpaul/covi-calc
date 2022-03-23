import * as tp from '../types'

export function continents(state = [], action) {

    switch(action.type){

        case tp.FETCH_CONTINENT_REQUEST:         
          return {...state, loading:true };
           
        case tp.FETCH_CONTINENT_SUCCESS:                     
         return  action.data;
        default:
            return state;
    }
}