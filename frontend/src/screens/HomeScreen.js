import React, { Fragment } from 'react';
import { Row, Col } from 'react-bootstrap';
import products from '../products';
import Product from '../components/Product';

const HomeScreen = () => {
	return (
		<Fragment>
			<h1>Latest Products</h1>
			<Row>
				{products.map(product => (
					<Col key={product._id} sm={12} md={12} lg={4} xl={3}>
						<Product product={product}/>
					</Col>
				))}
			</Row>
		</Fragment>
	);
};

export default HomeScreen;
