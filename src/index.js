import React from 'react'
import { render } from 'react-dom'
import './index.css'

import App from './App'

render(<App />, document.getElementById('root'))

// class Board extends React.Component {
//     renderSquare(i) {
//       return <Square value={i} />;
//     }
//   }

//   class Square extends React.Component {
//     render() {
//       return (
//         <button className="square" onClick={function() { alert('click'); }}>
//           {this.props.value}
//         </button>
//       );
//     }
//   }
