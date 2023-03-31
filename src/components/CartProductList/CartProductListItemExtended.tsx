import { Button, Card, CardContent, Grid } from '@mui/material'
import { Products } from 'utils/productsArray'
import DeleteIcon from '@mui/icons-material/Delete'
import Quantity from 'components/Quantity/Quantity'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { toggleLike } from 'redux/likeReducer'

type Props = {
    product: Products
    productCount: number
    removeProductFromCart: (id: number) => void
    changeProductQuantity: (id: number, count: number) => void
    id: number
}

const CartProductListItemExtended = ({
    product,
    productCount,
    removeProductFromCart,
    changeProductQuantity,
}: Props) => {
    const isLiked = useAppSelector((state) => state.productsLike[product.id])
    const dispatch = useAppDispatch()

    return (
        <Grid item xs={12} sm={4}>
            <Card>
                <CardContent>
                    <Button
                        variant="outlined"
                        onClick={() => dispatch(toggleLike(product.id))}
                    >
                        {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </Button>

                    <div className="product-image">
                        <img src={product.image} alt="" />
                    </div>
                    <h4>{product.title}</h4>
                    <p>Price for one item: ${product.price}</p>
                    <p>Count: {productCount}</p>
                    <Quantity
                        count={productCount}
                        onDecrement={() =>
                            productCount === 1
                                ? removeProductFromCart(product.id)
                                : changeProductQuantity(
                                      product.id,
                                      productCount - 1
                                  )
                        }
                        onIncrement={() =>
                            changeProductQuantity(product.id, productCount + 1)
                        }
                        minCount={0}
                    />
                    <Button
                        variant="outlined"
                        onClick={() => removeProductFromCart(product.id)}
                    >
                        <DeleteIcon />
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}
export default CartProductListItemExtended
