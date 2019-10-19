import React, {Component} from 'react';
import "./Hour.css"
import {connect} from "react-redux";
import {addHour} from "../redux/actions";

class Hour extends Component {
  render() {
    return (
      <div className="Hour" onClick={() => {
        this.props.addHour(this.props.dayIndex, this.props.hour)
      }}>
        {
          this.props.isLit && 'lit'
        }
      </div>
    );
  }
}

export default connect(
  null,
  {addHour}
)(Hour);
