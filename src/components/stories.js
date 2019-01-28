import React, { Component } from 'react';
import { connect } from 'react-redux';

export const Stories = (props) => {
    return (
        <div>
            {JSON.stringify(props)}
        </div>
    );
}

export default connect((state) => state)(Stories);
