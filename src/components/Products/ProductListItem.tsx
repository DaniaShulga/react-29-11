import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import { Component } from 'react'
import './ProductListItem.scss'

interface Props {
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
}

interface State {
    count: number
    color: string
}

class ProductListItem extends Component<Props, State> {
    state = {
        count: 1,
        color: 'green',
    }

    onIncrementClick = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }))
    }

    onDecrementClick = () => {
        this.setState((prevState) => ({
            count: prevState.count - 1,
        }))
    }

    changeColor = () => {
        this.setState((prevState) => ({
            color: prevState.color === 'green' ? 'red' : 'green',
        }))
    }

    render() {
        const { title, description, type, capacity, price, image } = this.props
        return (
            <Card variant="outlined" className="product">
                <CardContent>
                    <div className="product-image">
                        <img src={image} alt="" />
                    </div>
                    <h4 className="product-title">{title}</h4>
                    <div className="product-description">{description}</div>
                    <div className="product-features">Type: {type}</div>
                    <div className="product-features">
                        Capacity: {capacity}Gb
                    </div>
                    <div className="product-price">
                        Price: <strong>${price}</strong>
                    </div>

                    <p>
                        Color:{' '}
                        <span className={this.state.color}>
                            {this.state.color}
                        </span>{' '}
                    </p>
                    <button onClick={this.changeColor}>Change color</button>

                    <div className="product-quantity">
                        <Button
                            variant="outlined"
                            onClick={this.onDecrementClick}
                            disabled={this.state.count <= 1}
                        >
                            -
                        </Button>
                        <TextField size="small" value={this.state.count} />
                        <Button
                            variant="outlined"
                            onClick={() => this.onIncrementClick()}
                        >
                            +
                        </Button>
                    </div>

                    <CardActions className="btns-wrap">
                        <Button variant="outlined">Add to cart</Button>
                    </CardActions>
                </CardContent>
            </Card>
        )
    }
}

export default ProductListItem
