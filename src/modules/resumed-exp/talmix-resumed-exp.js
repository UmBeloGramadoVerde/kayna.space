import React, { Component } from 'react';
import ResumedExp from './resumed-exp';

export default class TalmixResumedExp extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ResumedExp
                url="/professional/talmix"
                title="Talmix"
                description="Development of talent management plataform"
                technologies="Angular - PHP"
                timespan="Apr '21 - Present" />
        );
    }
}