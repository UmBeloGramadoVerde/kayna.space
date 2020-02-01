import React, { Component } from 'react';
import ResumedExp from './resumed-exp';

export default class ArquivoWorldResumedExp extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ResumedExp
                url="/personal/arquivo-world"
                title="Arquivo"
                title2="World"
                description="Continuous speech recognition wrapper for arquivo.pt"
                technologies="JS - Web Speech API"
                timespan="May '19" />
        );
    }
}