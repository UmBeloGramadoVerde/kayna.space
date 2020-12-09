import React, { Component } from 'react';
import ResumedExp from './resumed-exp';

export default class GramadinhoVerdaoResumedExp extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ResumedExp
                url="/personal/gramadinho-verdao"
                title="Gramadinho"
                title2="Verdao"
                description="Educational twitch streams"
                technologies="Arduino - p5.js"
                timespan="Jun '20 - Present" />
        );
    }
}