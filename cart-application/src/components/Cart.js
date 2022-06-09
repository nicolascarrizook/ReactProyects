import { Component } from 'react'
import BubbleAlert from './BubbleAlert';
import CartDetails from './CartDetails';

const styles = {
    carro: {
        backgroundColor: '#359A2C',
        color: '#fff',
        fontSize: '1.5em',
        padding: '10px',
        borderRadius: '5%',
        cursor: 'pointer',
        border: 'none',
    },
    bubble: {
        position: 'relative',
        left: 12,
        top: 20,
    }
}

class Cart extends Component {
    render(){
        const { carro, isVisible, mostrarCarro } = this.props;
        const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0);
        return(
            <div>
                <span style={styles.bubble}>
                    {cantidad !== 0
                        ? <BubbleAlert value={cantidad} /> : null
                    }
                </span>
                <button onClick={mostrarCarro} style={styles.carro}>
                    Carro
                </button>
                {
                    isVisible ? <CartDetails carro={carro} /> : null
                }
            </div>
        )
    }
}

export default Cart;