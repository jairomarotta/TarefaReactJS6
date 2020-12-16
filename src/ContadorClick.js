import React, { useState, useEffect } from 'react';

function Contador() {
  
  const [count, setCount] = useState(0);

  
  useEffect(() => {
    
    document.title = `Você clicou ${count} vezes`;
  });

  return (
    <div>
       <p><b> Aperte o botão: </b></p>  
      <button onClick={() => setCount(count + 1)}>
        Clique aqui
      </button>
      <p>Você clicou {count} vezes</p>
    </div>
  );
}

export default Contador;