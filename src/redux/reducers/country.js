import * as tp from '../types'

export function country  (state = {}, action) {

    switch(action.type){

        case tp.FETCH_COUNTRY_REQUEST:         
          return {...state, loading:true };
           
        case tp.FETCH_COUNTRY_SUCCESS:            
         return  action.data;
        default:
            return state;
    }
}

