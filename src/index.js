import React from 'react';
import ReactDOM from 'react-dom';
import {PaperEditor} from "./PaperEditor";

ReactDOM.render(
  <React.StrictMode>
      <PaperEditor width={window.innerWidth} height={window.innerHeight}/>
  </React.StrictMode>,
  document.getElementById('root')
);

