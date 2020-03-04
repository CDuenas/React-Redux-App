import { FETCHING_ADVICE_START, FETCHING_ADVICE_SUCCESS } from "../actions";

const initialState = {
    advice: null,
    isFetching: false,
    error: ""
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_ADVICE_START:
            return {
                ...state,
                isFetching: true,
                error: ""
            };
        case FETCHING_ADVICE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                advice: action.payload
            };
        default:
            return state;
    }
}