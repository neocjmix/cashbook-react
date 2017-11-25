import React, {Component} from 'react';
import {DateTime} from 'luxon';
import './Record.css';

class Record extends Component {
    render() {
        const data = this.props.data;

        return <div className="Record">
            <input className="record-date" type="date" name={"record-" + data.id + "-date"}
                   value={data.date.toISODate()}
                   onChange={e => this.props.updateRecord({date: DateTime.fromISO(e.target.value)})}/>
            <label className="record-inout" htmlFor={"record-out-" + data.id}>
                <input type="radio" name={"record-" + data.id + "-inout"}
                       id={"record-out-" + data.id} autoFocus
                       checked={!data.isIncome}
                       onChange={e => this.props.updateRecord({isIncome: !e.target.checked})}/>
                지출
            </label>
            <label className="record-inout" htmlFor={"record-in-" + data.id}>
                <input type="radio" name={"record-" + data.id + "-inout"}
                       id={"record-in-" + data.id}
                       checked={data.isIncome}
                       onChange={e => this.props.updateRecord({isIncome: e.target.checked})}/>
                수입
            </label>
            <input type="text" className="record-title" name={"record-" + data.id + "-title"}
                   value={data.title} placeholder="title"
                   onChange={e => this.props.updateRecord({title : e.target.value})} />
            <input type="number" className="record-amount" name={"record-" + data.id + "-amount"}
                   value={data.amount}
                   onChange={e => this.props.updateRecord({amount: e.target.value})} min="0"/>
            <button aria-label="delete" className="delete" onClick={() => this.props.deleteRecord(data)}>-
            </button>
        </div>
    }
}

export default Record;
