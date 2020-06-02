import React from 'react';
import "./card-component.css"


export class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  visible: false,
                        ownerID: "",
                        vein: 0,
                        type: "UNDEFINED", //will contain String; one of: "normal", "food", "salt", "vinegar", "water", "dead"
                        protein: {}, //will contain Object of: <color>(String) -> <amount>(int)
                        sugar: {}, //will contain Object of: <color>(String) -> <amount>(int)
        };
    }

    componentDidMount() {
        if (this.props.type) {
            this.setState({type: this.props.type});
        }
        if (this.props.protein) {
            this.setState({protein: this.props.protein});
        }
        if (this.props.sugar) {
            this.setState({sugar: this.props.sugar});
        }
    }

    render() {

        return <svg version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 173.20508075688772 200"
                    className='svg'>
            <path fill="#123"
                  stroke="white"
                  d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"></path>
        </svg>
    }
}