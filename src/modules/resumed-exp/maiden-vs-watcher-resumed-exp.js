import React, { Component } from 'react';
import ResumedExp from './resumed-exp';

export default class MaidenVsWatcherResumedExp extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ResumedExp
                url="/personal/maiden-vs-watcher"
                title="Maiden"
                title2="Vs Watcher"
                description="Local asymmetrical multiplayer VR game"
                technologies="Unity - 3D printing - OpenCV - NodeMCU"
                timespan="Mar '20 - Dec '20" />
        );
    }
}