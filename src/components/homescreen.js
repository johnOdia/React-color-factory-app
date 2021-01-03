import { Component } from 'react';
import { Link } from 'react-router-dom'

export class Homescreen extends Component {
    render() {
        return (
            <main>
                <h1>Color Factory</h1>
                <Link to='/colors'>
                    <div>visit our color factory!</div>
                </Link>
            </main>
        )
    }
}