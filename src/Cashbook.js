import React, {Component} from 'react';
import {DateTime} from 'luxon';
import './Cashbook.css';
import Record from "./Record";

class Cashbook extends Component {
    constructor() {
        super();
        this.state = {
            records: [],
            offset : 0
        }
    }

    setOffset(amount){
        // this.setState({current : amount})
    }

    deleteRecord(recordToDelete) {
        this.setState({
            records: this.state.records.filter(record => record !== recordToDelete)
        })
    }

    createRecord() {
        this.setState({
            records: [{
                id : this.state.records.length > 0  ? this.state.records[this.state.records.length - 1].id + 1 : 0,
                date : DateTime.local(),
                isIncome : false,
                title : "",
                amount : 0
            }].concat(this.state.records)
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

    getIncome(){
        return this.state.records
            .filter(record => record.isIncome)
            .map(record => record.amount)
            .reduce((a, b) => a + b*1, 0);
    }

    getExpenditure(){
        return this.state.records
            .filter(record => !record.isIncome)
            .map(record => record.amount)
            .reduce((a, b) => a + b*1, 0);
    }

    getSum() {
        return this.getIncome() - this.getExpenditure();
    }

    render() {
        return (
            <div className="Cashbook">
                <header className="Cashbook-header">
                    <h1 className="Cashbook-title">Cashbook</h1>
                    <span className="Cashbook-desc">yet another cashbook</span>
                    <div className="Cashbook-sum">
                        <span className="Cashbook-income">{this.getIncome()}</span>&nbsp;-&nbsp;
                        <span className="Cashbook-expenditure">{this.getExpenditure()}</span>&nbsp;=&nbsp;
                        <input className="Cashbook-current" type="number" name={"Cashbook-current"}
                               value={this.getSum()} onChange={e => this.setOffset(e.target.value)} />
                    </div>
                </header>
                <div className="Cashbook-records">
                    <button className="Cashbook-add-record" onClick={e => this.createRecord()}>+</button>
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
                </div>
            </div>
        );
    }
}

export default Cashbook;
