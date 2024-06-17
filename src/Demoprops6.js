import React, { Component } from 'react'

export default class Demoprops6 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            cnt: 0
        }
    }
    componentDidMount() {
        setInterval(() => {
            if (this.state.count < 15) {
                this.setState({ count: this.state.count + 1 })
            }
        }, 50)

    }
    render() {
        return (
            <>
                <h1>{this.state.count}</h1>

            </>
        )
    }
}
