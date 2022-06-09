import { Component } from 'react'

const styles = {
    layout: {
        color: '#333',
        display: 'flex',
        flexDirction: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: '1200px',
    }


}

class Layout extends Component {
    render() {
        return (
            <div style={styles.layout}>
                <div style={styles.container}>
                    {this.props.children} 
                </div>
            </div>
        )
    }
}

export default Layout;