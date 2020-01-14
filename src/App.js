import React, { Component } from 'react'

import './App.css';
import './Loading.css';

class App extends Component {
  
  state = {
    products: [],
    product: {
      name: 'sample product',
      price: 50
    }
  }

  componentDidMount() {
   this.getProducts(); 
  }

  getProducts = _ => {
    this.setState({showLoading: true})
    fetch('//node-create-server.herokuapp.com/products')
      .then(response => response.json())
      .then(response => {
        this.setState({products: response.data})
        this.setState({productFetchError: false})
      })
      .catch(err => {
        console.error(err)
        this.setState({productFetchError: true})
      })
      .then( _ => this.setState({showLoading: false}))
  }

  async getProductsEs7() {
    try {
      let response = await fetch('//node-create-server.herokuapp.com/products')
      let {data} = await response.json()
      console.log(data)
      this.setState({products: data})
    }
    catch(error) {
      console.error(error)
    }
  }

  addProduct = _ => {
    this.setState({showLoading: true})
    const {product} = this.state

    fetch('//node-create-server.herokuapp.com/products/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(product)
    })
      .then(this.getProducts)
      .catch(err => console.error(err))
      .then( _ => this.setState({showLoading: false}))
  }

  deleteProduct = id => {
    this.setState({showLoading: true})
    fetch(`//node-create-server.herokuapp.com/products/delete/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
    })
      .then(this.getProducts)
      .catch(err => {
        console.error(err)
        this.setState({productFetchError: true})
      })
      .then( _ => this.setState({showLoading: false}))
  }

  putProduct = id => {
    const {product} = this.state

    this.setState({showLoading: true})
    fetch(`//node-create-server.herokuapp.com/products/put/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(product)
    })
      .then(this.getProducts)
      .catch(err => {
        console.error(err)
        this.setState({productFetchError: true})
      })
      .then( _ => this.setState({showLoading: false}))
  }

renderProduct = ( {product_id, name, price} ) => <li key={product_id}>{product_id}.{name} - ${price}<span onClick={e => this.deleteProduct(product_id)} >X</span></li>

  render() {
    const {products, product, productFetchError, showLoading} = this.state
    return (
      <div className="App">
        <ul>
          {productFetchError ? <li>Fetch product fail, something went wrong...</li> : products.map(this.renderProduct)}
        </ul>

        <div>
          <input type="text" 
            value={product.name} 
            placeholder="Product name..." // destructing product inside state then merge by using spread syntax
            onChange={ e => this.setState({ product: {...product, name: e.target.value} }) } />          
          <input type="text" 
            value={product.price} 
            placeholder="Product name..."
            onChange={ e => this.setState({ product: {...product, price: e.target.value} }) } />
          <button onClick={this.addProduct}>Add Product</button>
        </div>
        {showLoading ? <div className="loading">Loading&#8230;</div> : null}
      </div>
    );
  }
}

export default App;
