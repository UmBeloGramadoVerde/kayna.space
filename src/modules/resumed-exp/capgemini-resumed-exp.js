import React, { Component } from 'react';
import ResumedExp from './resumed-exp';

export default class CapgeminiResumedExp extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ResumedExp
                url="/professional/capgemini"
                title="Capgemini"
                description="Development of web applications"
                technologies="Angular - React - Node.js"
                timespan="Aug '19 - Apr '21" />
        );
    }
}