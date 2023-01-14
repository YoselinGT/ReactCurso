import {Component} from "react";

class Input extends Component {

    handleChange = (value) => {
        this.setState({valor: value})
    }

    render() {

        return (
            <input value={this.props.value} onChange={this.props.onChange} />
        )
    }
}

export default Input