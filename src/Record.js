import React, {Component} from 'react';
import './Record.css';

class Record extends Component {
    render() {
        return <div className="Record">
            <input type="text" name="title" value={this.props.data.title} placeholder="title"
                   onChange={e => this.props.updateRecord({title : e.target.value})} />
            <input type="number" name="amount" value={this.props.data.amount}
                   onChange={e => this.props.updateRecord({amount : e.target.value})} />
            <button aria-label="delete" className="delete" onClick={() => this.props.deleteRecord(this.props.data)}>-
            </button>
        </div>
    }
}

export default Record;
