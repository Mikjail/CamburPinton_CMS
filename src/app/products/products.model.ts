export interface Product {
    _id: any;
    name: string;
    class: string;
    properties: [ ProductProperties ];
}

export interface ProductProperties {
    _id: string;
    name: string;
    description: string;
    ingredients: [string];
    img: string;
    price: number;
    cant: number;
    total: number;
    productstype_id: number;
}
