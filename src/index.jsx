import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';
import App from './components/app.jsx';



// class Hello extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       clicked: false,
//       count: 0
//     };
//   }

//   handleClick = () => {
//     this.setState(
//       {
//         clicked: !this.state.clicked,
//         count: this.state.count + 1
//       }
//     );
//   }

//   render() {
//     return (

//       <div
//         className={this.state.clicked ? 'clicked' : 'init-state'}
//         onClick={this.handleClick}
//       >
//         Hey
//         {this.props.name}
//         you are
//         {this.props.age}
//         years old
//         <div className="counter">
//           click to count
//           {this.state.count}
//         </div>
//       </div>

//     );
//   }
//}

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(
    <App />, root
  )
}
