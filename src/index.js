import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import {HEADER, EMPHASIS, LIST, LINK, IMAGE, CODE} from './reference.js' ;

class Previewer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            input: '',
            output: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({
            input: e.target.value,
            output: e.target.value
        });
    }
    render(){
        return(
            <React.Fragment>
            <div id='inputText'>
                <h1>Input Text </h1>
                <textarea onChange={this.handleChange} value={this.state.input} id='input' />
            </div>
            <div id='outputText'>
                <h1>Markdown Preview</h1>
                <textarea value={this.state.output} id='output' disabled/>
            </div>
            </React.Fragment>
        )
    };

}

ReactDOM.render(<Previewer />, document.getElementById('root'));