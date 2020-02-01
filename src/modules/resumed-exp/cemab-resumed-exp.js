import React, { Component } from 'react';
import ResumedExp from './resumed-exp';

export default class CemabResumedExp extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ResumedExp
                url="/professional/cemab"
                title="Cemab"
                description="Teaching robotics to kids"
                technologies="Arduino - C - Sparki"
                timespan="Sep '17 - Jun '18" />
        );
    }
}