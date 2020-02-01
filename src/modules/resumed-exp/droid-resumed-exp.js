import React, { Component } from 'react';
import ResumedExp from './resumed-exp';

export default class DroidResumedExp extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ResumedExp
                url="/professional/droid"
                title="Droid"
                description="Team member on robotics competitons"
                technologies="Arduino - C - BickxCC"
                timespan="Jun '17 - Jul '18" />
        );
    }
}