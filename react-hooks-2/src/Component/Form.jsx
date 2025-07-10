import { useReducer, useState } from "react"

 const initialUser = {
        name: '',
        email: ''
    }

const reducerFunction = (state,action) => {
    switch(action.type){
        case 'UPDATE_EMAIL':
            return { ...state, email: action.payload}
        case 'UPDATE_NAME':
            return { ...state, name: action.payload}
        case 'RESET_FORM':
            return initialUser
        default:
            return state;
    }
}

const Form = () => {
    const [state, dispatch] = useReducer(reducerFunction, initialUser)

    const handleReset = () => {
        dispatch({
            type: 'RESET_FORM'
        })
    }

    return(
        <>
            <div style={{padding:'10px'}}>
                <label>Email</label> &emsp;
                <input type="text" value={state.email} onChange={
                     (e) => {
                        dispatch({
                            type: 'UPDATE_EMAIL',
                            payload: e.target.value
                        })
                     }
                }/>
            </div>
            <div style={{padding:'10px'}}>
                <label>Name</label> &emsp;
                <input type="text" value={state.name} onChange={
                   (e) => {
                        dispatch({
                            type: 'UPDATE_NAME',
                            payload: e.target.value
                        })
                   }
                }/>
            </div>
            <div>
                <button type="button" onClick={handleReset}>Reset</button>
            </div>
        </>
    )
}

export default Form