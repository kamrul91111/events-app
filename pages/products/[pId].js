import React from 'react'
import fs from 'fs/promises'
import path from 'path'

const ProductScreen = ({ loadedProduct }) => {
  console.log(loadedProduct)
  return <div>ProductScreen</div>
}

// server side code
export const getStaticProps = async context => {
  //to grab url param, which could have been done with link, however, that prevents ssr
  const { params } = context

  const productId = params.pId //grabbing url param through server side code instead of client side with router obj
  // file path current working directory's root
  const filePath = path.join(process.cwd(), 'dummy-products.json')
  // async function grab file
  const jsonData = await fs.readFile(filePath)
  // convert json to a js object
  const data = JSON.parse(jsonData)

  // filter through all data and only grab the one which matches with url param
  const product = data.products.find(product => product.id === productId)

  return {
    props: {
      loadedProduct: product
    }
  }
}

// needed for dynamic route. for next js to know the id and generate on server side instead of client
export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { pId: 'p1' } },
      { params: { pId: 'p2' } },
      { params: { pId: 'p3' } }
    ],
    // if numbers are many
    fallback: false
  }
}

export default ProductScreen
