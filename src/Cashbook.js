import React, {Component} from 'react';
import './Cashbook.css';

class Cashbook extends Component {
    constructor(){
        super();
        this.state = {
            records : ["foo","bar"]
        }
    }

    deleteRecord(recordToDelete){
        this.setState({
            records : this.state.records.filter(record => record !== recordToDelete)
        })
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
                            <button aria-label="delete" className="delete" onClick={() => this.deleteRecord(record)}>-</button>
                        </li>)}
                </ul>
            </div>
        );
    }
}

export default Cashbook;
