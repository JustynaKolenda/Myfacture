import React from 'react';

export default (facture : any ) => {
  return (
    <div className='facturs' style={{ display: 'flex', justifyContent: 'center'}}>
      <p>{facture.name} {facture.surName}</p>
    </div>
  )
}