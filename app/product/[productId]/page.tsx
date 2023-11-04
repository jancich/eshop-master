import Container from "@/app/components/container";
import ProductDetails from "./ProductDetails";
import ListRating from "./ListRating";
import { products } from "@/utils/products";

interface IParams {
    ProductId?: string;
}

const Product = ({ params }: { params: IParams }) => {
    console.log('params', params);

    const product = products.find((item) => item.id === params.productId)
    return (
        <div className="p-8">
            <Container>
                <ProductDetails product={product} />
                <div className="flex flex-col mt-20 gap-4">
                    <div>Add Rating</div>
                    <ListRating product={product}/>
                </div>
            </Container>
        </div>
    );
};

export default Product;
