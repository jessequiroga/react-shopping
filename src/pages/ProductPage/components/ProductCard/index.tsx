import React, { useCallback, MouseEvent } from 'react';
import { Product } from 'interfaces';
import { Card, Button, Avatar } from '@material-ui/core';
import { Label as LabelIcon } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

interface ProductCardProps extends Product {
    addToCart(id: string): void;
}

export function ProductCard({
    addToCart,
    shortDescription,
    id,
    miniature,
    name,
    price,
}: ProductCardProps) {
    const history = useHistory();

    const handleAddToCart = useCallback(
        (e: MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            addToCart(id);
        },
        [id, addToCart],
    );

    const handleGoToProduct = useCallback(
        (e: MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            history.push(`/product/${id}`);
        },
        [id],
    );

    return (
        <Card>
            <Avatar alt={shortDescription} src={miniature}>
                <LabelIcon />
            </Avatar>

            <h3>{name}</h3>
            <p>{shortDescription}</p>
            <p>{`Price: ${price}`}</p>
            <Button onClick={handleAddToCart} color="primary">
                Add item to cart
            </Button>
            <Button onClick={handleGoToProduct}>Go to product</Button>
        </Card>
    );
}
