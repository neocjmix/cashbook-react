import React, {Component} from 'react';
import './Cashbook.css';
import Record from "./Record";

class Cashbook extends Component {
    constructor() {
        super();
        this.state = {
            records: []
        }
    }

    deleteRecord(recordToDelete) {
        this.setState({
            records: this.state.records.filter(record => record !== recordToDelete)
        })
    }

    createRecord() {
        this.setState({
            records: this.state.records.concat({
                id : this.state.records.length > 0  ? this.state.records[this.state.records.length - 1].id + 1 : 0,
                isIncome : false,
                title : "",
                amount : 0
            })
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
