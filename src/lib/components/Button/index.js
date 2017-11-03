import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import Colors, { btnShadow, btnShadowHover } from '../theme/Colors'


class Button extends Component {

    constructor() {
        super()

        this.state = {
            bgcolor: '',
            boxShadow: '',
            transform: ''
        }
    }

    componentWillMount() {
        const { primary, secondary, danger } = this.props

        if (primary) {
            this.setState({ bgcolor: Colors.primary })
        } else if(secondary) {
            this.setState({ bgcolor: Colors.secondary })
        } else if (danger) {
            this.setState({ bgcolor: Colors.danger })
        } else {
            this.setState({ bgcolor: 'buttonface' })
        }


        console.log(this)
    }

    handleClick(e) {
        console.log('handleClick ', e)
    }

    render() {

        const { disable, children } = this.props

        const Button = styled.button`
            border: none;
            padding: .5rem 1.2rem;
            cursor: pointer;
            border-radius: 3px;
            color: #fff;
            will-change: box-shadow, transform;
            transform: translateY(0px);
            transition: box-shadow .3s ease-in-out, transform .3s ease-in-out;

            background: ${this.state.bgcolor};
            box-shadow: ${btnShadow(this.state.bgcolor)};

            :hover {
                box-shadow: ${btnShadowHover(this.state.bgcolor)};
                transform: translateY(-3px);
            }

            :active {
                box-shadow: ${btnShadow(this.state.bgcolor)};
                transform: translateY(0px);
            }

            :focus {
                outline: none;
            }


            ${props => disable && css`
                cursor: not-allowed;
                background-color: buttonface;
            `}
        `

        return(
            <Button
                onClick={this.handleClick.bind(this)}
            >
            {children}</Button>
        )
    }
}


export default Button;