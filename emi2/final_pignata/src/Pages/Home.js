import React, { Component } from 'react';
import Detalle from "../Detalle";


class Home extends Component{
    render(){
        return(
            <div>
                {this.props.info.map((info)=><Detalle data={info} />)}
            </div>
        )
    }
}
export default Home;
