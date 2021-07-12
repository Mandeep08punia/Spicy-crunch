import React from 'react'
import {Container, Typography,Button,Grid} from '@material-ui/core'
import useStyles from './Cartstyles'
import CartItem from './CartItem';
import {Link} from 'react-router-dom'

function Cart({cart,UpdateCartQty,RemoveFromCart,handleEmptyCart}) {
    
    const classes=useStyles();
    const EmptyCart=()=>(
        <Typography variant="subtitle1">Your Shopping Cart is Empty!
        <Link to="/" className={classes.link}>Add Items</Link>
        </Typography>
        
    )
    const FilledCart=()=>(
        <>
        <Grid container spacing={3}>
            {
                cart.line_items.map((item)=>(
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item} UpdateCartQty={UpdateCartQty} RemoveFromCart={RemoveFromCart}/>
                    </Grid>
                ))
            }
        </Grid>
        <div className={classes.cardDetails}>
            <Typography variant="h4">
                TotalAmount:{cart.subtotal.formatted_with_symbol}
            </Typography>
            <div>
                <Button className={classes.emptyButton} onClick={handleEmptyCart} size="large" type="button" variant="contained" color="secondary">
                    Empty Cart
                </Button>
                <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">
                    Checkout
                </Button>
            </div>
        </div>
        </>
    )
    if(!cart.line_items)
    return 'Loading...'
    return (
        <Container>
            <div className={classes.toolbar}/>
            <Typography className={classes.title} variant="h3" gutterBottom>Shopping Cart</Typography>
            {!cart.line_items.length?<EmptyCart/>:<FilledCart/>}
        </Container>
    )
}

export default Cart
