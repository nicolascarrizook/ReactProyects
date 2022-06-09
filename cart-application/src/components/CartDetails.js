import { Component } from 'react'

const styles = {
    cartDetails: {
        backgroundColor: '#fff',
        position: 'absolute',
        marginTop: 30,
        boxShadow: '1px 5px 5px rgba(0,0,0,0.2)',
        borderRadius: '5px',
        width: '300px',
        right: 50,
    },
    ul: {
        margin: 0,
        padding: 0 
    },
    producto: {
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '25px 20px',
        borderBottom: '1px solid #ccc',
    }
}

class CartDetails extends Component {
    render(){
        const { carro } = this.props;
        return(
            <div style={styles.cartDetails}>
                <ul style={styles.ul}>
                    {carro.map(el => (
                        <li style={styles.producto} key = {el.name}>
                            <img src={el.img} alt={el.name} width='50' height='32'/>
                            {el.name}: <span>{el.cantidad}</span>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

}

export default CartDetails;