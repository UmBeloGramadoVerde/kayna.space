import React, { Component } from 'react';
import ResumedExp from './resumed-exp';

export default class ConfigrResumedExp extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ResumedExp
                url="/professional/configr"
                title="Configr"
                description="Coordinating web app migration team"
                technologies="Python - Shell scripting"
                timespan="Feb '18 - Dec '18" />
        );
    }
}