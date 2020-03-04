import React from 'react';
import { connect } from 'react-redux';

import { getAdvice} from '../store/actions';

import '../App.css';

const Advice = ({ getAdvice, advice, isFetching, error}) => {
    if (isFetching) {
        return <h2>Fetching Wisdom</h2>;
    }

    if (error) {
        return <h2>{error}</h2>;
    }

    return (
        <div>
            <h2>Wise words: {advice}</h2>
            <button className="button" onClick={getAdvice}>Press for Enlightenment</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        advice: state.advice,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps,{ getAdvice })(Advice);