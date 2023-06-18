import { Buy_Cake } from "./cakeType";

const initialState={

    numOfCake:10
}

const cakeReducer=(state=initialState,action)=>{
    switch(action.type){
        case Buy_Cake:return{
            ...state,
            numOfCake : state.numOfCake-1
        }
        default:return state
    }

}

export default cakeReducer
