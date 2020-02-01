import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ResumedExp extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <h4 className="expansive_bois">
                <Link to={this.props.url}>{this.props.title}</Link>
                <br boolean={this.props.title2} />
                <Link to={this.props.url} boolean={this.props.title2}>{this.props.title2}</Link>
                <br boolean={this.props.title3} />
                <Link to={this.props.url} boolean={this.props.title3}>{this.props.title3}</Link>
                <div className="description">{this.props.description}</div>
                <div className="technologies">{this.props.technologies}</div>
                <i className="timespan">{this.props.timespan}</i>
            </h4>
        );
    }
}