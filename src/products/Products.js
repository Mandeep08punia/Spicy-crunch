import React from 'react'
import { Grid } from '@material-ui/core'
import IndividualProduct from './IndividualProduct';

const products=[
    {id:1,name:"Pizza", description:'creamy Pizza',price:'Rs300'},
    {id:2,name:"Burger", description:'creamy Burger',price:'Rs80'},
];
function Products() {
    return (
        <main>
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
