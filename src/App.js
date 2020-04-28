import React from 'react';
import './App.css';
import Toastr from './components/Toastr';


function App() {
  
  return (
    <div>
      
      <Toastr 
        title="Sticky!" 
        message="I do not think that word means what you think it means."
        color="info"
        position="bottom-center"
      >
        {({
          onShow,
          onHide,
          state
        }) => {
            return state ? <button onClick={onHide}>Hide</button> : <button onClick={onShow}>Show</button>
        }}
      </Toastr>
    </div>
  );
}

export default App;
