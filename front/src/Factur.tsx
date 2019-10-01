import * as React from 'react';
import DatePicker from 'react-datepicker';
// import moment from 'moment';
 
import 'react-datepicker/dist/react-datepicker.css';


export class Factur extends React.Component<any,any> {
  state = {
    startDate: new Date(),
    title: '',
    name: '',
    lastName: '',
    netto: ''
  };

  handleNameChange = (e:any) => {
    this.setState({
      name: e.target.value
    });
  }
  handleTitleChange = (e:any) => {
    this.setState({
      title: e.target.value
    });
  }
  handleLastNameChange = (e:any) => {
    this.setState({
      lastName: e.target.value
    });
  }
  handleNettoChange = (e:any) => {
    this.setState({
      netto: e.target.value
    });
  }
  handleChange = (date:any) => {
    this.setState({
      startDate: date,
    });
  };
  render(){
    const { handleSubmit, submitting } = this.props
    return (
        <form onSubmit={handleSubmit} className="form-group col-6 container">
          <h1>Utwórz fakture</h1>
          <div>
            <div>Tytuł</div>
              <input required placeholder={'podaj tytuł'} value={this.state.title} onChange={this.handleTitleChange}></input>
            <div>Imię</div>
              <input required placeholder={'podaj imie'} value={this.state.name} onChange={this.handleNameChange}></input>
            <div>nazwisko</div>
              <input required placeholder={'podaj nazwisko'} value={this.state.lastName} onChange={this.handleLastNameChange} ></input>
            <div>Kwota netto</div>
              <input required placeholder={'podaj kwota netto'} value={this.state.netto}  onChange={this.handleNettoChange}></input>
            <div className="form-group">
              <label>Select Date: </label>
                <DatePicker
                  required
                  selected={this.state.startDate}
                  onChange={this.handleChange}
                  name="startDate"
                />
            </div>
            <div className="form-group">
            <button color="info" className="col-lg-2 offset-xs-1" type="submit" id={"buttonSend"} disabled={submitting}>Send</button>
            </div>
          </div>
        </form>
    )
  }
}

export default Factur