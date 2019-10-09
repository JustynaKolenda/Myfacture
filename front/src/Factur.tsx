import * as React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export interface SendForm{ 
  factur: {
    date: Date,
    title: string,
    name: string,
    surName: string,
    netto: number
  }
}

type FactureS = {
  factur: {
    date: Date,
    title: string,
    name: string,
    surName: string,
    netto: number
  },
  errors: {
    date: string,
    title: string,
    name: string,
    surName: string,
    netto: string
  },
}
 

export class Factur extends React.Component<any,FactureS> {
  constructor(props:any){
    super(props);
    this.state = {
      factur: {
        date: new Date(),
        title: '',
        name: '',
        surName: '',
        netto: 0
      },
      errors: {
        date: '',
        title: '',
        name: '',
        surName: '',
        netto: ''
      },
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleNettoChange = this.handleNettoChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validation = this.validation.bind(this);
  }

    public handleNameChange = (e:any) => {
      this.setState({
        factur:{
          ...this.state.factur,
          name: e.target.value
        }
      });
    }
    public handleTitleChange = (e:any) => {
      this.setState({
        factur:{
          ...this.state.factur,
        title: e.target.value
        }
      });
        
    }
    public handleLastNameChange = (e:any) => {
      this.setState({
        factur:{
          ...this.state.factur,
        surName: e.target.value
        }
      });
    }
    public handleNettoChange = (e:any) => {
      this.setState({
        factur:{
          ...this.state.factur,
        netto: e.target.value
        }
      });
    }
    public handleChange = (date:any) => {
      this.setState({
        factur:{
          ...this.state.factur,
        date: date
        }
      });
    };
    public validation(){
      const {factur:{ date, title, name, surName, netto}} = this.state;
      let result = true;
      const errorObject = {date: '', title: '', name: '', surName: '', netto: ''}

      if(title.length === 0){
         result = false;
         errorObject.title = "Podaj tytuł";
      }  if(name.length === 0){
         result = false;
         errorObject.name = "Podaj imie";
      }  if(surName.length === 0){
         result = false;
         errorObject.surName = "Podaj nazwisko";
      }  if(netto === 0){
         result = false;
         errorObject.netto = "Podaj kwote"
      } if(date === null){
         result = false;
         errorObject.date = "Błędna data"
      } 
        this.setState({
          errors : errorObject
        })
        
        return result
    }
    
    public handleSubmit(e:any){
      
      if(this.validation()){
        return this.props.onSubmit(this.state.factur);
      }   e.preventDefault();
  }

  render(){
    return (
        <form onSubmit={this.handleSubmit} className="form-group col-6 container">
          <h1>Utwórz fakture</h1>
          <div>
              <label className="col-lg-2 offset-xs-1" >Tytuł</label>
              <input placeholder={'podaj tytuł'} value={this.state.factur.title} onChange={this.handleTitleChange} ></input>
              {this.state.errors.title ? <div className="facture">Brak tytułu</div> : <div></div>}
            </div>
            <div>
              <label className="col-lg-2 offset-xs-1">Imię</label>
              <input  placeholder={'podaj imie'} value={this.state.factur.name} onChange={this.handleNameChange}></input>
              {this.state.errors.name ? <div className="facture">Podaj imie</div> : <div></div>}
            </div>
            <div>
              <label className="col-lg-2 offset-xs-1">Nazwisko</label>
              <input placeholder={'podaj nazwisko'} value={this.state.factur.surName} onChange={this.handleLastNameChange} ></input>
              {this.state.errors.surName ? <div className="facture">Podaj nazwisko</div> : <div></div>}
            </div>
            <div>
              <label className="col-lg-2 offset-xs-1">Kwota netto</label>
              <input placeholder={'podaj kwota netto'} value={this.state.factur.netto}  onChange={this.handleNettoChange}></input>
              {this.state.errors.netto ? <div className="facture">Podaj kwote</div> : <div></div>}
            </div>
            <div className="form-group">
              <label className="col-lg-2 offset-xs-1">Data faktury</label>
                <DatePicker
                  selected={this.state.factur.date}
                  onChange={this.handleChange}
                  name="startDate"
                  dateFormat= 'dd-MM-yyyy'
                />
                {this.state.errors.date ? <div className="facture">Zła data</div> : <div></div>}
            </div>
            <div className="form-group">
            <button color="info" className="col-lg-2 offset-xs-1" type="submit" id={"buttonSend"} >Wyślij</button>
            </div>
        </form>
    )
  }
}

export default Factur