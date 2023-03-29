import './App.css';
import React from 'react';
function App() {
  const [count, setCount] = React.useState(0);
  
  return (
    <div className="container">
       <div className='row my-5'>
          <div className='col-md-6 mx-auto'>
              <div className='card' >
                  <div className='card-body' >
                       <div className='lead'>
                       <p>
                       <span className='bg bg-danger p-2 rounded'>{count}</span>
                       </p>
                       <button className='btn btn-primary' onClick={()=>setCount(count+1)}>
                                   +
                       </button>
                       <button className='btn btn-primary' onClick={()=>setCount(count-1)}>
                                   -
                       </button>

                       </div>
                  </div>
               </div>

          </div>

        </div>
      
     </div>
  );
}

export default App;
