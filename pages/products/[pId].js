import React from 'react'
import classes from './products.module.css'
import fs from 'fs/promises'
import path from 'path'

const ProductScreen = ({ loadedProduct }) => {
  // before nextjs prerenders page, to avoid react error, if fallback is blocking, no need
  // if (!loadedProduct) {
  //   return (
  //     <div>Loading...</div>
  //   )
  // }

  return (
    <div className={classes.singleContainer}>
      <h1>{loadedProduct?.title}</h1>
    </div>
  )
}

// function that grabs data
const grabData = async () => {
  // file path current working directory's root
  const filePath = path.join(process.cwd(), 'dummy-products.json')
  // async function grab file
  const jsonData = await fs.readFile(filePath)
  // convert json to a js object
  const data = JSON.parse(jsonData)

  return data
}

// server side code
export const getStaticProps = async context => {
  //to grab url param, which could have been done with link, however, that prevents ssr
  const { params } = context
  const productId = params.pId //grabbing url param through server side code instead of client side with router obj
  // pass params and use this function to grab data
  const data = await grabData()

  // filter through all data and only grab the one which matches with url param
  const product = data.products.find(product => product.id === productId)

  // no product is found, show 404 page
  if (!product) {
    return { notFound: true }
  }

  return {
    props: {
      loadedProduct: product
    },
    // revalidate data every 10 seconds
    revalidate: 10
  }
}

// needed for dynamic route. for next js to know the id and generate on server side instead of client
export const getStaticPaths = async () => {
  // grab data
  const data = await grabData()

  // an array that holds all ids
  const ids = data.products.map(p => p.id)
  // in the needed format for next js
  const paramIds = ids.map(i => ({ params: { pId: i } }))

  return {
    paths: paramIds,
    // generate pages just in time, those who are not in path
    fallback: true
    // fallback: 'blocking' // means render the page and only then return component
  }
}

export default ProductScreen
