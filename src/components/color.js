import React from 'react'
import { Link } from 'react-router-dom'

export class Color extends React.Component{
    render(){
        return(
            <Link  to={{
                pathname: 'colors/' + this.props.name,
                state: { name:this.props.name,value: this.props.value }
              }}>
              <li>{this.props.name}</li>
            </Link>
        )
    }
}