import React, { Component } from "react";
import Display from "../../components/Display";
import axios from "axios";

class Form extends Component {
    state = {
        breed: "",
        breeds: []
    }

    handleSubmit = event => {
        event.preventDefault();
        let url = `https://dog.ceo/api/breed/${this.state.breed}/images`;
        axios.get(url).then(res => {
            console.log(res.data.message);
            this.setState({
                breeds: res.data.message,
                breed: ""
            })
        })
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div class="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <form>
                        <div className="form-group">
                            <label htmlFor="puppySearch">Search for a Breed</label>
                            <input type="text"
                                name="breed"
                                value={this.state.breed}
                                onChange={this.handleInputChange}
                                className="form-control"
                                placeholder="Enter breed name">
                            </input>
                        </div>
                        <button type="submit" className="btn btn-primary"
                            onClick={this.handleSubmit}>Search</button>
                    </form>
                    {this.state.breeds.map(image => (
                        <Display
                        key={this.state.breed}
                        breed={image}
                    />
                    ))}
                </div>
                <div class="col-md-2"></div>

            </div>
        )
    }
}

export default Form;