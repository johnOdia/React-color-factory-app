import React from 'react'
import { Link } from 'react-router-dom'
import { Color } from './color'

const colors = { colors: [{ name: 'red', value: '#FF0000' }, { name: 'green', value: '#008000' }, { name: 'blue', value: '#0000FF' }] }

const storedColors = localStorage.getItem('colors')  ? 'do nothing' : localStorage.setItem('colors',JSON.stringify(colors))

export class Colors extends React.Component{
    constructor(props) {
        super(props)
        this.state = JSON.parse(localStorage.getItem('colors'))
      }
    
    render(){
        let id = -1
        const allColors = this.state.colors.map(color => {
            return <Color key={id++} name={color.name} value={color.value} />
          })

        return(
            <div>
                <h2>Welcome to our color factory.</h2>
                <Link to='/colors/new'>
                   <h1>Add a color</h1>
                </Link>
                <ul>{allColors}</ul>
            </div>
        )
    }
}