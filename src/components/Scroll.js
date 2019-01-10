import React, { Component } from 'react';

class Scroll extends Component {
  render() {
    const { children } = this.props;
    return (
      <div style={{ overflow: 'scroll', border: '5px solid black', height: '800px'}}>
        {children}
      </div>
    )
  }
}

// const Scroll = (props) => {
//   return (
//     <div style={{ overflow: 'scroll', border: '5px solid black', height: '800px'}}>
//       {props.children}
//     </div>
//   );
// };

export default Scroll;
