import React from 'react';
import './spinner.css';

function Spinner(){
    return (
        <div className="spinner">
          <div className="circle">
            Loding...
            <div className="circle-child"></div>
          </div>
        </div>
    );
}

export default Spinner;
