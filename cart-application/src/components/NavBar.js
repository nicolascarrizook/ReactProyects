import { Component } from 'react';
import Cart from './Cart';
import Logo from './Logo';

const styles = {
    navbar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100px',
        position: 'relative',
        padding: '0 50px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
    }
}

class NavBar extends Component {
    render(){

        const { carro, isVisible, mostrarCarro } = this.props

        return(
            <nav style={styles.navbar}>
                <Logo/>
                <Cart
                    carro={carro}
                    isVisible={isVisible}
                    mostrarCarro={mostrarCarro}
                />
            </nav>
        )
    }
}

export default NavBar;