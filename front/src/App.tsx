import React from 'react';
import './App.css';
import Factur from './Factur';

class App extends React.Component{
  render(){
    const data = [
      { name: "John", surName: "Smath" },
      { name: "Paul", surName: "Smeth" },
      { name: "Cody", surName: "Smith" },
      { name: "Jordan", surName: "Smoth" },
      { name: "Jim", surName: "Smuth" },
    ]

  return (
    <div className="App">
      <div className="pdf">
      {
            data.map(facture => <Factur facture={facture} key={facture.surName}/>)
          }  
      </div> 
    </div>
  );
}
}
export default App;
