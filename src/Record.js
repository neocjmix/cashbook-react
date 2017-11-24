import React, {Component} from 'react';
import './Record.css';

class Record extends Component {
    render() {
        return <div className="Record">
            {this.props.data.title}
            <button aria-label="delete" className="delete" onClick={() => this.props.deleteRecord(this.props.data)}>-
            </button>
        </div>
    }
}

export default Record;
