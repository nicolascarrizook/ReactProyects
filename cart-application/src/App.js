import { Component } from 'react'
import Productos from './components/Productos';
import './App.css'
import Layout from './components/Layout';
import Title from './components/Title';
import NavBar from './components/NavBar';

class App extends Component {

  state = {
    productos: [
      { name: 'Tomate', price: 1500, img: '/productos/tomate.jpg' },
      { name: 'Arvejas', price: 2500, img: '/productos/arbejas.jpg' },
      { name: 'Lechuga', price: 500, img: '/productos/lechuga.jpg' },
    ],
    carro: [],
    isVisible: false
  }

  agregarAlCarro = (producto) => {
    const { carro } = this.state
    if (carro.find(p => p.name === producto.name)) {
      const newCarro = carro.map(p => 
        p.name === producto.name ? ({
          ...p,
          cantidad: p.cantidad + 1
        })
          : p
      )
      return this.setState({ carro: newCarro })
    }
    return this.setState({
      carro: [
        ...this.state.carro.concat({
          ...producto,
          cantidad: 1,
        })
      ]
    })
  }

  mostrarCarro = () => {
    this.setState ({ isVisible: !this.state.isVisible })
  }

  render() {

    const { isVisible } = this.state

    return (
      <div className="App">
        <NavBar
          carro={this.state.carro}
          isVisible={isVisible} 
          mostrarCarro={this.mostrarCarro} 
        />
        <Layout>
          <Title />
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    );
  }
}

export default App;
