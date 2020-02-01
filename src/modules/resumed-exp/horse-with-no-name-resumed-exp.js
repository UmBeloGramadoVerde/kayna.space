import React, { Component } from 'react';
import ResumedExp from './resumed-exp';

export default class HorseWithNoNameResumedExp extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ResumedExp
                url="/personal/horse-with-no-name"
                title="Horse"
                title2="With No"
                title3="Name"
                description="2D Multiplayer experiment game"
                technologies="Socket.io - p5js"
                timespan="May '18" />
        );
    }
}