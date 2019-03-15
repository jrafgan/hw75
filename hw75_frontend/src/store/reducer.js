import {CHANGE_VALUE, DECODE_SUCCESS, ENCODE_SUCCESS} from "./actions";

const initialState = {
    decoded: '',
    encoded: '',
    password: ''
};

const Reducer = (state = initialState, action) => {
    switch (action.type) {

        case ENCODE_SUCCESS:
            return {...state, encoded: action.encode};

        case DECODE_SUCCESS:
            return {...state, decoded: action.decode};

        case CHANGE_VALUE:

            const {name, value} = action.e.target;
            return {...state, [name]: value};

        default:
            return state;
    }
};

export default Reducer;