import * as React from 'react';
// import DatePicker from 'react-datepicker'
export class Factur extends React.Component {

  render(){
    return (
        <form>
          <h1>Utwórz fakture</h1>
          <div>
            <div>Tytuł</div>
            <input placeholder={'podaj tytuł'} ></input>
            <div>Imię</div>
            <input placeholder={'podaj imie'} ></input>
            <div>nazwisko</div>
            <input placeholder={'podaj nazwisko'} ></input>
            <div>Kwota netto</div>
            <input placeholder={'podaj kwota netto'} ></input>
            {/* <DatePicker  /> */}
          </div>
        </form>
    )
  }
}

export default Factur