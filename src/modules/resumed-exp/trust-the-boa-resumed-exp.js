import React, { Component } from 'react';
import ResumedExp from './resumed-exp';

export default class TrustTheBoaResumedExp extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ResumedExp
                url="/personal/trust-the-boa"
                title="Trust"
                title2="The Boa"
                description="Collaborative wallet brand"
                technologies="Wordpress - Illustrator"
                timespan="Dec '18 - Present" />
        );
    }
}