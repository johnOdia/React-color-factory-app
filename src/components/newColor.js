import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class NewColor extends Component {
    handleClick(e) {
        //preventDefault stops React links from working? hmm...
        // e.preventDefault()
        
        const input1 = e.target.parentNode.parentNode.children[1], input2 = e.target.parentNode.parentNode.children[4]

        if (input1.value !== '' && input2.value !== '') {
            const color = { name: input1.value, value: input2.value };
            const storedColors = JSON.parse(localStorage.getItem('colors'));
            storedColors.colors.unshift(color);
            localStorage.setItem('colors', JSON.stringify(storedColors));
        } else {
            alert('fill in all input fields!');
        }

    }
    render() {
        return (
            <form>
                <label htmlFor='colorName'>Color Name</label>
                <input type='text' id='colorName' />
                <br />
                <label htmlFor='value'>Color Value</label>
                <input type='text' id='value' />
                <br />
                <Link to='/colors'>
                    <button onClick={this.handleClick}>add this color</button>
                </Link>
            </form>
        )
    }
}