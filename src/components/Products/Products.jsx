import React from "react"
import Grid from "@material-ui/core/Grid"
import Product from "./Product/Product" 

import useStyles from "./styles"

const products = [
    {
        id: 1,
        name: "Shoes",
        description: "Running shoes",
        price: "$100",
        image: "https://runningmagazine.ca/wp-content/uploads/2020/07/Screen-Shot-2020-07-07-at-2.53.19-PM-1082x675.png",
    },
    {
        id: 2,
        name: "Macbook Pro17",
        description: "Apple macbook",
        price: "$1600",
        image: "https://static.bhphoto.com/images/images2000x2000/1573663014_1520445.jpg",

    }
]

const Products = () => {

    const classes = useStyles()
    return (
    <main>
        <Grid container justify="center" spacing={4}>
            {
                products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}/>
                    </Grid>

                )

                )
            }

        </Grid>
    </main>

    )
   

}

export default Products
