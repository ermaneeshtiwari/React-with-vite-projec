import React, {useState} from 'react';
function ShowHideToggle() {  
    const [result, setResult] = useState(true);
    return (
        <div>
            <button onClick={() => setResult(!result)}>Toggle</button>
            { result? <div id="myDIV">
                <h1>Toggle {result? "Show" : "Hide"}</h1>
                <p>Este conteúdo pode ser mostrado ou escondido clicando no botão acima.</p>
            </div>
            : null
            }
        </div>
    );
}
export default ShowHideToggle;