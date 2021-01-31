import {createStore} from "redux";
const initialState = {
    "type":"",
    "texts":[{text:"jizz",checked:1}],
}
const reducer = (state=initialState, action) => {
    switch(action.type){
        case "SEND":
            state = {...state,"texts":[...state.texts,action.text]}
            // console.log(action);
            break;
        case "UPDATE":
            // console.log(action.text);
            // console.log()
            state = {...state,"texts":state.texts.map((obj,id)=>{return id===action.id ? action.text : obj})}
        break;
    }
    console.log(state.texts);
    
    return state;
}

export default createStore(reducer);