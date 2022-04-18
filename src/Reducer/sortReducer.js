export const sortReducer=(state,action)=>
{ console.log(action)
    switch(action.type){

        case "HIGH-TO-LOW":
        { 
            return {...state,sort:action.type}
        }
        case "LOW-TO-HIGH":
        {
            return{...state,sort:action.type}
        }
        default: 
        return state

    }
}