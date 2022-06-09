import { Component } from 'react'
import Producto from './Producto';


class Productos extends Component {
    render(){
        const {productos, agregarAlCarro} = this.props;
        return (
            <div className='card'>
                {productos.map(producto => (
                    <Producto
                        key={producto.name}
                        producto={producto}
                        agregarAlCarro={agregarAlCarro}
                    />
                ))}
            </div>
        )
    }
}

export default Productos;