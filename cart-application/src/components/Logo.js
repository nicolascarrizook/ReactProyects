import { Component } from 'react'

const styles = {
    logo: {
        fontWeight: 'bold',
        fontSize: '1.5em',
    }
}

class Logo extends Component {
    render(){
        return (
            <div style={styles.logo}>
                Shop
            </div>  
        )
    }
}

export default Logo;