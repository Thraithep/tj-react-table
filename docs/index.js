import ReactDOM from 'react-dom';
import React from 'react';

import Datagrid from '../src/index';

let headers = [
    { 
        title: 'title1',
        type: 'TEXT',
        field: 'txt1'
    },
    {
        title: 'title2',
        type: 'TEXT',
        field: 'txt2'
    }
];

let datas = [
    {
        txt1: 'txt1_1',
        txt2: 'txt2_1'
    },
    {
        txt1: 'txt1_2',
        txt2: 'txt2_2'
    }
];

ReactDOM.render(<Datagrid datas={datas} headers={headers}></Datagrid>,document.getElementById('root'));

// const App = () => {
//     return (
//       <div>
//         <p>React here!</p>
//       </div>
//     );
//   };

// ReactDOM.render(<App/>,document.getElementById('root'));
