import React, { useCallback, useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import { Product, ProductId } from 'interfaces';
import { getProducts } from '../../services/products';
import { ProductCard } from './components';

type CartItem = { id: ProductId; count: number };

export function ProductPage() {
    const [products, setProducts] = useState<Product[] | null>(null);
    const [totalCollectionCount, setTotalCollectionCount] = useState(0);
    const [productCart, setCart] = useState<CartItem[]>([]);

    const addToCart = useCallback(
        (id: ProductId) => {
            setCart([...productCart, { id, count: 1 }]);
        },
        [productCart, setCart],
    );

    useEffect(() => {
        setTimeout(() => {
            getProducts(0, 10).then(({ collection, totalCollectionCount }) => {
                setProducts(collection);
                setTotalCollectionCount(totalCollectionCount);
            });
        }, 500);
    }, []);

    return (
        <>
            <Container>
                <Typography variant="h3" gutterBottom>
                    Product List
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {products === null && <p>Loading....</p>}
                    {products !== null && products.length === 0 && (
                        <p>List is empty </p>
                    )}
                    {products !== null &&
                        products.length > 0 &&
                        products.map((product) => (
                            <ProductCard
                                {...product}
                                addToCart={addToCart}
                                key={product.id}
                            />
                        ))}

                    <ol>
                        {productCart.map(({ id, count }) => (
                            <li key={id}>{`id: ${id} count: ${count}`}</li>
                        ))}
                    </ol>
                </Typography>
            </Container>
        </>
    );
}
