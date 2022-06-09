import { Component } from 'react'

const styles = {
    title: {
        fontSize: '1.5em',
    }
}

class Title extends Component {
    render(){
        return (
            <h1 style={styles.title}>Tienda</h1>
        )
    }
}

export default Title;