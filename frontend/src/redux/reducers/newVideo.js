import { SET_ACTOR, SET_VOICE, SET_ALIGNMENT, SET_BACKGROUND } from '../reducers/types'
import Actor1 from '../../assets/actors/yoyo-actor.png';
import Background1 from '../../assets/backgrounds/office-background.png';
const initialState = {
    actor: Actor1,
    voice: 0,
    alignment: 'center',
    background: Background1,
}

const videoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ACTOR:
            return { ...state, actor: action.payload }
        case SET_VOICE:
            return { ...state, voice: action.payload }
        case SET_ALIGNMENT:
            return { ...state, alignment: action.payload }
        case SET_BACKGROUND:
            return { ...state, background: action.payload }
        default:
            return state
    }
}

export default videoReducer;
