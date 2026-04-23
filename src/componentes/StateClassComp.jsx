import React from "react";
class StateClassComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contador: 0
        };
    }
    incrementar = () => {
        this.setState({ contador: this.state.contador + 1 });
    }
    render() {
        return (
            <>
                <h1>Componente de Estado</h1>
                <p>Contador: {this.state.contador}</p>
                <button onClick={this.incrementar}>Incrementar</button>
            </>
        );
    }
}

export default StateClassComp;