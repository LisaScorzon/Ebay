import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchAllProducts, createProduct, deleteProduct} from '../actions/products'
import {Link} from 'react-router-dom'
import ProductForm from './ProductForm'




class Products extends PureComponent {
  
  

  createProduct = (product) => {
   this.props.createProduct(product)
 }

 
 
  componentWillMount() {
    this.props.fetchAllProducts()
  }

  render() {
    const {products} = this.props
    return (
      <div>
        <h1>All products</h1>

        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
          { products.map(product => (<tr key={product.id}>
              <td>{product.id}</td>
              <td>
              <Link to={ `/products/${product.id}` }>{product.name}</Link>
              </td>
              <td>&euro; {product.price}.00</td>
              <td>{product.image}> </td>
              
            </tr>)) }
          </tbody>
				</table>

          <h1>Create a new product</h1> 

          <ProductForm onSubmit={this.createProduct} />
        


        </div>

    )
  }
}


const mapStateToProps = function (state) {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps, {
  fetchAllProducts,
  createProduct,
})(Products)
 