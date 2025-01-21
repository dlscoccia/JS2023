import { notFound } from 'next/navigation';
import { ProductGrid, Title } from '@/components';
import { initialData } from '@/seed/seed';
import { Category } from '@/interfaces';

interface Props {
    params: {
        id: Category;
    };
}

interface Labels {
    title: string;
    subTitle: string;
}

export default async function CategoryPage({ params }: Props) {
    const { id } = await params;

    /* if (id === 'kids') {
        notFound();
    } */

    const products = initialData.products.filter(
        (product) => product.gender === id
    );

    const labels: Record<Category, Labels> = {
        men: { title: 'para hombres', subTitle: 'Productos para él' },
        women: { title: 'para mujeres', subTitle: 'Productos para ella' },
        kid: { title: 'para niños', subTitle: 'Productos para los pequeños' },
        unisex: {
            title: 'para todos',
            subTitle: 'Productos para cualquier ocación',
        },
    };

    return (
        <>
            <Title
                title={`Artículos ${labels[id].title}`}
                subTitle={`${labels[id].subTitle}`}
                className='mb-2'
            />

            <ProductGrid products={products} />
        </>
    );
}
