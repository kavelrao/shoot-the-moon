import * as React from 'react';

// Properties for InputForm component
// onSubmit is provided by App to transfer inputs to parent
export interface InputProps {
    onSubmit: (state: InputForm['state']) => void,
}

// Input Form component. Collects user inputs for latitude, longitude, height, and date
// and updates state accordingly.
export class InputForm extends React.Component<InputProps> {
    // State stores numbers as strings at first to make input representation blank
    state = {
        latitude: "",
        longitude: "",
        height: "",
        date: "",
    };

    // Updates state on change to match inputs
    handleChange = (event: React.ChangeEvent<any>) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    // On submit, parse number fields as floats and set state
    // Then, in callback, send state to parent component through props.onSubmit
    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // convert number fields to float
        let latitude = parseFloat(this.state.latitude);
        let longitude = parseFloat(this.state.longitude);
        let height = parseFloat(this.state.height);

        this.setState({latitude, longitude, height}, () => {
            this.props.onSubmit(this.state);
        });
        
    }

    render() {
        // JSX for an input form collecting latitude, longitude, target height, and date
        return (
            <form onSubmit={ this.handleSubmit }>
                <span className="input-span">
                    <label htmlFor="latitude">Latitude: &nbsp;</label>
                    <input type="number" name="latitude" value={ this.state.latitude } onChange={ this.handleChange } required />
                </span>
                <span className="input-span">
                    <label htmlFor="longitude">Longitude: &nbsp;</label>
                    <input type="number" name="longitude" value={ this.state.longitude } onChange={ this.handleChange } required />
                </span>
                <span className="input-span">
                    <label htmlFor="height">Target Height: &nbsp;</label>
                    <input type="number" name="height" value={ this.state.height } onChange={ this.handleChange } required />
                </span>
                <span className="input-span">
                    <label htmlFor="date">Date: &nbsp;</label>
                    <input type="date" name="date" value={ this.state.date } onChange={ this.handleChange } required />
                </span>
                <span className="input-span">
                    <button type="submit">update</button>
                </span>
            </form>
        );
    }
}

export class TimeForm extends React.Component {
    state = {
        time: null,
    }


}