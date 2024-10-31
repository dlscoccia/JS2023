import { ProductCard } from '../components/ProductCard';

const product = {
    id: '1',
    title: 'Cofee Mug',
    img: '../assets/',
};

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <ProductCard product={product} />
        </div>
    );
};
