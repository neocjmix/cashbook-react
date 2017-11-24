import React, {Component} from 'react';
import './Cashbook.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
            records : ["foo","bar"]
        }
    }

    render() {
        return (
            <div className="Cashbook">
                <header className="Cashbook-header">
                    <h1 className="Cashbook-title">Cashbook</h1>
                    yet another cashbook
                </header>
                <ul className="Cashbook-records">
                    {this.state.records.map(record => <li>{record}</li>)}
                </ul>
            </div>
        );
    }
}

export default App;
