import * as React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export interface SendForm{ 
  date: Date,
  title: string,
  name: string,
  surName: string,
  netto: number
}

type FactureS = {
  date: Date,
  title: string,
  name: string,
  surName: string,
  netto: number
}

export class Factur extends React.Component<any,FactureS> {
  state = {
    date: new Date(),
    title: '',
    name: '',
    surName: '',
    netto: 0
  };
  constructor(props:any){
    super(props)
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleNettoChange = this.handleNettoChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validation = this.validation.bind(this);
  }

    public validation(){
      const { date, title, name, surName, netto} = this.state;

      if(title.length === 0){
        console.log("brak danych")
        return true
      } else if(name.length === 0){
        console.log("brak danych")
        return true
      } else if(surName.length === 0){
        console.log("brak danych")
        return true
      } else if(netto === 0){
        console.log("brak danych")
        return true
      }else if(date === null){
        console.log("brak danych")
        return true
      } else {
        return false
      }
    }

    public handleNameChange = (e:any) => {
      this.setState({
        name: e.target.value
      });
    }
    public handleTitleChange = (e:any) => {
      this.setState({
        title: e.target.value
      });
        
    }
    public handleLastNameChange = (e:any) => {
      this.setState({
        surName: e.target.value
      });
    }
    public handleNettoChange = (e:any) => {
      this.setState({
        netto: e.target.value
      });
    }
    public handleChange = (date:any) => {
      this.setState({
        date: date
      });
    };
    
    public handleSubmit(e:any){
      e.preventDefault();
      if(this.validation() === true){
         console.log("błąd")
      } else{
          return this.props.onSubmit(this.state);
      }
    }

  render(){
    return (
        <form onSubmit={this.handleSubmit} className="form-group col-6 container">
          <h1>Utwórz fakture</h1>
          <div>
              <label className="col-lg-2 offset-xs-1">Tytuł</label>
              <input placeholder={'podaj tytuł'} value={this.state.title} onChange={this.handleTitleChange}></input>
            </div>
            <div>
              <label className="col-lg-2 offset-xs-1">Imię</label>
              <input  placeholder={'podaj imie'} value={this.state.name} onChange={this.handleNameChange}></input>
            </div>
            <div>
              <label className="col-lg-2 offset-xs-1">Nazwisko</label>
              <input placeholder={'podaj nazwisko'} value={this.state.surName} onChange={this.handleLastNameChange} ></input>
            </div>
            <div>
              <label className="col-lg-2 offset-xs-1">Kwota netto</label>
              <input placeholder={'podaj kwota netto'} value={this.state.netto}  onChange={this.handleNettoChange}></input>
            </div>
            <div className="form-group">
              <label className="col-lg-2 offset-xs-1">Data faktury</label>
                <DatePicker
                  selected={this.state.date}
                  onChange={this.handleChange}
                  name="startDate"
                  dateFormat= 'dd-MM-yyyy'
                />
            </div>
            <div className="form-group">
            <button color="info" className="col-lg-2 offset-xs-1" type="submit" id={"buttonSend"} >Send</button>
            </div>
        </form>
    )
  }
}

export default Factur