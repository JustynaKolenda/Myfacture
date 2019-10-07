
import * as React from 'react';
import {Factur, SendForm} from './Factur';

export class FacturePage extends React.Component<any,any>{
  constructor(props:any){
    super(props)
    this.submitting = this.submitting.bind(this);
  }
  
  public submitting(form: SendForm){
    return fetch('http://localhost:8000/facture', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
          'Content-Type': 'application/json',
      }  
  })
    .then(res => res.json())
    .then(res => {
      console.log(res);
    })
    .catch(error => console.log("Błąd: ", error));
  }

    render(){
        return(
            <Factur onSubmit={this.submitting}/>
        )
    }
} 