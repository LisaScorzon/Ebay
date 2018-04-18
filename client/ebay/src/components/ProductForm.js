import React, {PureComponent} from 'react'


class ProductForm extends PureComponent {
	state = {}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.onSubmit(this.state)
	}

	handleChange = (event) => {
		const {name, value} = event.target

		this.setState({
		  [name]: value
		})
	}

	render() {
		const initialValues = this.props.initialValues || {}
		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<label htmlFor="name">Product name</label>
					<input name="name" id="name" value={
						this.state.name || initialValues.name || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor="price">Product price</label>
					<input name="price" id="price" value={
						this.state.price || initialValues.price || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor="description">Product description</label>
					<input name="description" id="description" value={
						this.state.description || initialValues.description || ''
					} onChange={ this.handleChange } />
				</div>
                <div>
					<label htmlFor="image">image of product(URL)</label>
					<input name="image" id="image" value={
						this.state.image || initialValues.image || ''
					} onChange={ this.handleChange } />
				</div>

                <div>
					<label htmlFor="email">Seller's email</label>
					<input name="email" id="email" value={
						this.state.email || initialValues.email || ''
					} onChange={ this.handleChange } />
				</div>
                <div>
					<label htmlFor="phone">Seller's Phonenumber</label>
					<input name="phone" id="phone" value={
						this.state.phone || initialValues.phone || ''
					} onChange={ this.handleChange } />
				</div>


				<button onSubmit={this.onSubmit} type="submit">Upload your new product!</button>
			</form>
		)
	}
}

export default ProductForm
