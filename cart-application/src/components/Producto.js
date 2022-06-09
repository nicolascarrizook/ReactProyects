import { Component } from 'react';
import Button from './Button';
import './producto.css'


const style = {
    cardContainer: {
        display: 'flex',
        flexDirection: 'column',
        margin: '1em',
    }
}

class Producto extends Component {

    render(){
        const {producto, agregarAlCarro} = this.props;
        return (
            <div style={style.cardContainer}>
                <div className='card_unit'>
                    <img src={this.props.producto.img} alt={this.props.producto.name} />
                    <h2>{this.props.producto.name}</h2>
                    <p>${this.props.producto.price}</p>
                    <Button onClick={() => agregarAlCarro(producto)}>        
                        Agregar al carro                
                    </Button>
                </div>
            </div>
        )
    }
}

export default Producto;