type CartData = {
    totalCount: number
    totalPrice: number
}
const CartHeader = (cartData: CartData) => {
    return (
        <div>
            <div>{cartData.totalCount}</div>
            <div>${cartData.totalPrice}</div>
        </div>
    )
}
export default CartHeader
