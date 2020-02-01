import React, { Component } from 'react';
import ResumedExp from './resumed-exp';

export default class BeloGramadoVerdeResumedExp extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ResumedExp
                url="/personal/belo-gramado-verde"
                title="Belo"
                title2="Gramado"
                title3="Verde"
                description="Assorted calligraphy adventures"
                technologies="Pen - Ink - Hands"
                timespan="Jan '18 - Present" />
        );
    }
}