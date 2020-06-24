export interface Product {
    readonly id: ProductId;
    readonly name: string;
    readonly price: number;
    readonly shortDescription: string;
    readonly description: string;
    readonly miniature?: string;
    readonly image?: string;
}

export type ProductId = string;
