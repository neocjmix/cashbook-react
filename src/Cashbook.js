import React, {Component} from 'react';
import './Cashbook.css';

class Cashbook extends Component {
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
                    {this.state.records.map((record, index) =>
                        <li key={index}>
                            {record}
                            <button aria-label="delete" className="delete">-</button>
                        </li>)}
                </ul>
            </div>
        );
    }
}

export default Cashbook;
