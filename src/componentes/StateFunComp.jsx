import { useState } from 'react';
function StateFunComp() {
    const [contador, setContador] = useState(0);
    return (
        <>
            <h1>Componente de Estado</h1>
            <p>Contador: {contador}</p>
            <button onClick={() => setContador(contador + 1)}>Incrementar</button>
        </>
    );
}

export default StateFunComp;