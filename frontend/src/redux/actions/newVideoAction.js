import { SET_ACTOR, SET_VOICE, SET_ALIGNMENT, SET_BACKGROUND ,SET_TITLE} from '../reducers/types';

export const setActor = (actor) => async (dispatch) => {
    dispatch({ type: SET_ACTOR, payload: actor });
}

export const setVoice = (voice) => async (dispatch) => {
    dispatch({ type: SET_VOICE, payload: voice })
}

export const setAlignment = (alignment) => async (dispatch) => {
    dispatch({ type: SET_ALIGNMENT, payload: alignment })
}

export const setBackground = (bg) => async (dispatch) => {
    dispatch({ type: SET_BACKGROUND, payload: bg })
}
export const setTitle = (title)=> async (dispatch)=>{
    dispatch({type: SET_TITLE,payload:title})
}