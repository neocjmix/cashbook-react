import React, {Component} from 'react';
import './Cashbook.css';
import Record from "./Record";

class Cashbook extends Component {
    constructor() {
        super();
        this.state = {
            records: [
                {title: "foo"},
                {title: "bar"}
            ]
        }
    }

    deleteRecord(recordToDelete) {
        this.setState({
            records: this.state.records.filter(record => record !== recordToDelete)
        })
    }

    createRecord() {
        this.setState({
            records: this.state.records.concat({title: "new"})
        })
    }

    updateRecord(recordToUpdate, updateData) {
        this.setState({
            records: this.state.records.map(record => {
                if(record !== recordToUpdate) return record;
                return Object.assign({}, record, updateData);
            })
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
                                <Record
                                    data={record}
                                    deleteRecord={record => this.deleteRecord(record)}
                                    updateRecord={updateData => this.updateRecord(record, updateData)}
                                />
                            </li>
                        )}
                    </ul>
                    <button className="Cashbook-add-record" onClick={e => this.createRecord()}>+</button>
                </div>
            </div>
        );
    }
}

export default Cashbook;
