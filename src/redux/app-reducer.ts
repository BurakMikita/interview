
import {getAuthUserData} from "./auth-reducer";
import {InferActionsTypes} from "./redux-store";






let initialState= {
    initialized: false,
    errorText: null as string | null
};
export type initialStateType =typeof initialState
type ActionsType = InferActionsTypes<typeof  actions>

const appReducer = (state = initialState, action: ActionsType):initialStateType => {
    switch (action.type) {
        case 'INITIALIZED_SUCCESS':
            return {
                ...state,
                initialized: true
            }
        case 'ERROR_SUCCESS':
            return {
                ...state,
                errorText:action.textError
            }


        default:
            return state;
    }
}


 export const actions = {
     initializedSuccess:() => ({type: 'INITIALIZED_SUCCESS'})as const,
     errorSucces: (textError:any)=>({type:'ERROR_SUCCESS',textError}) as const
 }






export const initializeApp = () => (dispatch:any) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
            dispatch(actions.initializedSuccess());
        });
}

export const error = (textError:string) => (dispatch:any) => {
    dispatch(actions.errorSucces(textError))
    const SetError =()=>{return dispatch(actions.errorSucces(null))}
    setTimeout(SetError,2000)}








export default appReducer;






