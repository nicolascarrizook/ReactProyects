import { Component } from 'react'

const styles = {
    button: {
        backgroundColor: '#337ab7',
        color: '#fff',
        padding: '10px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        margin: '10px'
    }
    
}

class Button extends Component {
    render(){
        return(
            <button style={styles.button} {...this.props}/>
        )
    }

}

export default Button;