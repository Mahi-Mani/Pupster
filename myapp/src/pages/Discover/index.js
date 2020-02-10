import React, { Component } from "react";
import axios from "axios";
import DisplayLike from "../../components/DisplayLike";
const FA = require("react-fontawesome");

class Discover extends Component {
    state = {
        randomDog: "",
        count: 0
    }

    componentDidMount() {
        this.getRandomDog();
    }

    handleHate = event => {
        event.preventDefault();
        this.getRandomDog();
    }

    handleLike = event => {
        event.preventDefault();
        const random = Math.floor(Math.random() * 5) + 1;
        if (random == 5) {
            let newCount = this.state.count + 1;
            this.setState({
                count: newCount
            })
            console.log(this.state.count);
        }
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
                <DisplayLike 
                    count = {this.state.count}
                />
                <div className="col-md-2"></div>
            </div>
        )
    }
}

export default Discover;