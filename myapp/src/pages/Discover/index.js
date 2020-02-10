import React, { Component } from "react";
import axios from "axios";
const FA = require("react-fontawesome");

class Discover extends Component {
    state = {
        randomDog: ""
    }

    componentDidMount() {
        this.getRandomDog();
    }

    handleHate = event => {
        event.preventDefault();
        this.getRandomDog();
    }

    getRandomDog = () => {
        axios.get("https://dog.ceo/api/breeds/image/random").then(res => {
            console.log(res.data.message);
            this.setState({
                randomDog: res.data.message
            })
        })
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <div className="card" style={{ width: "450px" }}>
                        <img src={this.state.randomDog} className="card-img-top"
                            style={{ width: "450px", height: "450px" }} />
                        <div className="card-body">
                            <button type="submit" onClick={this.handleHate}>
                                <FA name="rocket" />
                            </button>
                            <h5 className="card-title">ThumpsUp if you like me!
                            <button type="submit" onClick={this.handleLike}>
                                    <FA name="spinner" />
                                </button>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-2"></div>
            </div>
        )
    }
}

export default Discover;