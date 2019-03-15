import axios from '../axios_url'

export const ENCODE_SUCCESS = 'ENCODE_SUCCESS';
export const DECODE_SUCCESS = 'DECODE_SUCCESS';
export const CHANGE_VALUE = 'CHANGE_VALUE';

export const encodeSuccess = (encode) => {
    return {type: ENCODE_SUCCESS, encode}
};

export const decodeSuccess = (decode) => {
    return {type: DECODE_SUCCESS, decode}
};

export const changeValue = (e) => {
    return {type: CHANGE_VALUE, e}
};

export const sendToEncode = () => {
    return (dispatch, getState) => {
        const state = getState();
        if (state.password === '') {
            alert('Please, Enter Password')
        } else {
            axios.post('/encode', {password: state.password, message: state.decoded}).then(response => {
                dispatch(encodeSuccess(response.data.encoded))
            });
        }
    }
};

export const sendToDecode = () => {
    return (dispatch, getState) => {
        const state = getState();
        if (state.password === '') {
            alert('Please, Enter Password')
        } else {
            axios.post('/decode', {password: state.password, message: state.encoded}).then(response => {
                dispatch(decodeSuccess(response.data.decoded))
            });
        }
    }
};