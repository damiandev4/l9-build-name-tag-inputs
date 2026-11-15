import React, { Component } from "react";

class UserInput extends Component {
    state = { 
        name: "",
    };

    updateName = (e) => this.setState({ name: e.target.value });
    handleSubmit = (e) => { 
        e.preventDefault(); 
        this.setState({ name: "" });
    };

    render () {
        return (
            <form onSubmit = {this.handleSubmit}>
                <div className="name-submit">
                    <label for="name" class="input-label">Add a new name</label>
                    <input 
                        type="text" 
                        id="name" 
                        placeholder="Ann" 
                        value={this.state.name}
                        onChange={this.updateName}
                    /> 
                </div>
                <input type="submit" value="Create Name Tag" />
            </form>
        );
    }
}
export default UserInput