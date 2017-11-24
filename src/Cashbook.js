import React, {Component} from 'react';
import './Cashbook.css';
import Record from "./Record";

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
                <div className="Cashbook-records">
                    <ul>
                        {this.state.records.map((record, index) =>
                            <li key={index}>
                                <Record deleteRecord={record => this.deleteRecord(record)} data={record} />
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Cashbook;
