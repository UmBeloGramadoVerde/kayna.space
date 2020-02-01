import React, { Component } from 'react';
import ResumedExp from './resumed-exp';

export default class CodeRaceResumedExp extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ResumedExp
                url="/personal/code-race"
                title="Code Race"
                description="Hackathon for development of GM infotainment app"
                technologies="Spring Boot - Android - Angular"
                timespan="Dec '19" />
        );
    }
}