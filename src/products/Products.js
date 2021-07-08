import React from 'react'
import { Grid } from '@material-ui/core'
import IndividualProduct from './IndividualProduct';
import useStyles from './products_styles'

const products=[
    {id:1,name:"Spicy Sausage Pizza", description:'Spicy Sausage Pizza is loaded with onion, peppers, and chili oil on a homemade crust',price:'Rs300',image:'https://i.pinimg.com/originals/80/6f/e4/806fe49c3d607a5236f0ca65c609c5c9.jpg'},
    {id:2,name:"Spicy Chicken Burger", description:'Juicy chicken burgers with spicy piquanté peppers & herbs served on toasted buns is a family..',price:'Rs80',image:'https://simply-delicious-food.com/wp-content/uploads/2018/11/spicy-chicken-burgers-3.jpg'},
    {id:3,name:"Spicy Mushroom 'Cheese' Pizza", description:'This vegan Jalapeno Popper Pizza is here to push you through the rest of the week!❤️',price:'Rs300',image:'https://data.thefeedfeed.com/static/2020/01/27/15801451805e2f1a1c39457.jpg'}
];
function Products() {
    const classes=useStyles();
    return (
        <main className={classes.content}>
        <div className={classes.toolbar}/>
            <Grid container justify="center" spacing={4}>
                {
                    products.map((product)=>(
                        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                            <IndividualProduct product={product}/>
                        </Grid>
                    ))
                }
            </Grid>
        </main>
    )
}

export default Products
