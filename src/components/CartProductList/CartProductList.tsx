import productsArray, { getProductsObject, Products } from 'utils/productsArray'
import CartProductListItem from './CartProductListItem'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Products
    }
    CarItem?: any
}
const CartProductList = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
    CarItem = CartProductListItem,
}: Props) => {
    return (
        <>
            {Object.keys(productsInCart).map((productId) => (
                <CarItem
                    key={productId}
                    product={productsObject[parseInt(productId)]}
                    productCount={productsInCart[parseInt(productId)]}
                />
            ))}
        </>
    )
}
export default CartProductList
