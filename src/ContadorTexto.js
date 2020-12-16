import React, { useState, useEffect } from 'react';

function ContadorTexto() {
  
  const [countTxt, setCountTxt] = useState(0);

  
    useEffect(() => {
        document.title = `Você clicou ${countTxt} vezes`;
    });

  return (
    <div>
      <div>
          <p><b> Informe um texto: </b></p>  
          <input type="text" onChange={(e) => setCountTxt( e.target.value.length )} title="Informe um texto"></input>
          <p>Esse texto contém {countTxt} caracteres.</p>
      </div>
    </div>
  );
}

export default ContadorTexto;