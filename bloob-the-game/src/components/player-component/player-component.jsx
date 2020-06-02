import React from 'react';


export class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "UNDEFINED",
            color: "UNDEFINED",
            protein_production: {}, //will contain Object of: <color>(String) -> <amount>(int)
            sugar_production: {}, //will contain Object of: <color>(String) -> <amount>(int)
            protein_stock: {}, //will contain Object of: <color>(String) -> <amount>(int)
            sugar_stock: {}, //will contain Object of: <color>(String) -> <amount>(int)
            protein_cost_expansion: {}, //will contain Object of: <color>(String) -> <amount>(int)
            sugar_cost_expansion: {}, //will contain Object of: <color>(String) -> <amount>(int)
            resistances: {salt: 0,
                          vinegar: 0}
        };
    }

    componentDidMount() {
        if (this.props.name) {
            this.setState({name: this.props.name});
        }
        if (this.props.color) {
            this.setState({color: this.props.color});
        }
        if (this.props.protein_production) {
            this.setState({protein_production: this.props.protein_production});
        }
        if (this.props.sugar_production) {
            this.setState({sugar_production: this.props.sugar_production});
        }
        if (this.props.protein_cost_expansion) {
            this.setState({protein_cost_expansion: this.props.protein_cost_expansion});
        }
        if (this.props.sugar_cost_expansion) {
            this.setState({sugar_cost_expansion: this.props.sugar_cost_expansion});
        }
    }

    render() {

        return <div className="player-container"> Name: {this.state.name} <br/>
                     Color: {this.state.color} <br/>

                     Protein production: <ul>
                                            {Object.entries(this.state.protein_production).map( ([key, value]) => <li>{key}: {value}</li> )}
                                        </ul> <br/>

                     Resistances: <ul>
                                        {Object.entries(this.state.resistances).map( ([key, value]) => <li>{key}: {value}</li> )}
                                    </ul> <br/>
                </div>;


    }
}