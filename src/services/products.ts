import { Product } from 'interfaces';

export function getProducts(
    page: number,
    elementsOnPage = 10,
): Promise<{ collection: Product[]; totalCollectionCount: number }> {
    return Promise.resolve({
        collection: [
            {
                id: 'f236c43a-2b49-46f9-b63e-f9e9ds8e7aa8',
                name: 'Product 1',
                price: 10.99,
                shortDescription: 'Lorem ipsum dolor sit amet',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam cum dolorum hic incidunt inventore ipsum labore laboriosam maiores maxime molestias mollitia, nobis perferendis quasi sapiente sit ullam unde, voluptatum!',
                miniature: 'https://picsum.photos/seed/p1/50',
                image: 'https://picsum.photos/seed/p1/200/300',
            },
            {
                id: 'f236c43a-2b49-46f9-b63e-f9e9dd8e7aa0',
                name: 'Product 2',
                price: 0.99,
                shortDescription: 'Lorem ipsum dolor sit amet',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam cum dolorum hic incidunt inventore ipsum labore laboriosam maiores maxime molestias mollitia, nobis perferendis quasi sapiente sit ullam unde, voluptatum!',
                miniature: 'https://picsum.photos/seed/p2/50',
                image: 'https://picsum.photos/seed/p2/200/300',
            },
            {
                id: 'f236c43a-2b49-46f9-b63e-f9e9dd8e7aa9',
                name: 'Product 3',
                price: 1,
                shortDescription: 'Lorem ipsum dolor sit amet',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam cum dolorum hic incidunt inventore ipsum labore laboriosam maiores maxime molestias mollitia, nobis perferendis quasi sapiente sit ullam unde, voluptatum!',
            },
        ],
        totalCollectionCount: 0,
    });
}
