import React, {Component} from 'react';
import './Record.css';

class Record extends Component {
    render() {
        return <div className="Record">
            <label className="record-inout" htmlFor={"record-out-" + this.props.data.id}>
                <input type="radio" name={"record-" + this.props.data.id + "-inout"}
                       id={"record-out-" + this.props.data.id} autoFocus
                       checked={!this.props.data.isIncome}
                       onChange={e => this.props.updateRecord({isIncome: !e.target.checked})}/>
                지출
            </label>
            <label className="record-inout" htmlFor={"record-in-" + this.props.data.id}>
                <input type="radio" name={"record-" + this.props.data.id + "-inout"}
                       id={"record-in-" + this.props.data.id}
                       checked={this.props.data.isIncome}
                       onChange={e => this.props.updateRecord({isIncome: e.target.checked})}/>
                수입
            </label>
            <input type="text" className="record-title" name={"record-" + this.props.data.id + "-title"}
                   value={this.props.data.title} placeholder="title"
                   onChange={e => this.props.updateRecord({title : e.target.value})} />
            <input type="number" className="record-amount" name={"record-" + this.props.data.id + "-amount"}
                   value={this.props.data.amount}
                   onChange={e => this.props.updateRecord({amount: e.target.value})} min="0"/>
            <button aria-label="delete" className="delete" onClick={() => this.props.deleteRecord(this.props.data)}>-
            </button>
        </div>
    }
}

export default Record;
