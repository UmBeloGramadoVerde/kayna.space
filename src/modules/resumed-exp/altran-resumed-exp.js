import React, { Component } from 'react';
import ResumedExp from './resumed-exp';

export default class AltranResumedExp extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ResumedExp
                url="/professional/altran"
                title="Altran"
                description="Development of web applications"
                technologies="Angular - React - ASP.Net"
                timespan="Aug '19 - Present" />
        );
    }
}