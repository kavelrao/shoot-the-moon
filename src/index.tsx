import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './static/index.css';
import { InputForm } from './components/InputForm';

// Function component for the results section displayed after valid inputs
function Results(props: { lat: number, lon: number }) {
    return (
        <div>
            <div id="validLocation">
                <p>The perfect location for your photo: ({props.lat}, {props.lon})</p>
                <p>This result is in latitude and longitude, and you can copy it into the map software of your choice.</p>
                <p>Once in your map, you can track a line from your target object through this point, and all locations on that line will be great photo spots tonight!</p>
                <p></p>
            </div>
        </div>
        
    );
}

// Main component for the React App
// Contains and InputForm component and processes received inputs
export default class App extends React.Component {
    state = {
        results: false,
        input: {
            latitude: 0,
            longitude: 0,
            height: 0,
            date: "",
        },
        output: {
            latitude: 0,
            longitude: 0,
        },
    };

    // Takes in the state object of the input component
    // and makes API call to calculate results
    handleInputSubmit = (inputState: InputForm['state']) => {
        let latitude = inputState.latitude;

        // Set new state and perform next actions in callback
        this.setState({input: inputState, results: true}, () => {
            console.log(this.state);
        });
        
    }

    render() {
        return(
        <div>
            <InputForm onSubmit={ this.handleInputSubmit } />
            { this.state.results ? <Results lat={ this.state.output.latitude } lon={ this.state.output.latitude } /> : "" }
        </div>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
