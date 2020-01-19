import React, { Component } from "react";
class LastLevelClass extends Component {
  state = {};
  render() {
    const { data, verdura } = this.props;
    return (
      <div>
        <h1>CLASS - Props received:</h1>
        <ul>
          <li>{data}</li>
          <li>{verdura}</li>
        </ul>
      </div>
    );
  }
}

export default LastLevelClass;
