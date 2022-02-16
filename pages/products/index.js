import React from 'react'
import classes from './products.module.css'
import fs from 'fs/promises'
import path from 'path'
import Link from 'next/link'

// components
import PageHeading from './../../components/PageHeading/PageHeading'

// destructure props and grab products
const Products = ({ products }) => {
  return (
    <div>
      <PageHeading text='Products' color='darkgreen' />
      <div className={classes.pContainer}>
        {products.map(p => (
          <div
            key={p.id}
            style={{
              margin: 4,
              backgroundColor: 'black',
              cursor: 'pointer',
              padding: 5
            }}
          >
            <Link href={`/products/${p.id}`}>
              <h4>{p.title}</h4>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

// for static regen by nextjs, server side code
export const getStaticProps = async () => {
  // file path current working directory's root
  const filePath = path.join(process.cwd(), 'dummy-products.json')
  // async function grab file
  const jsonData = await fs.readFile(filePath)
  // convert json to a js object
  const data = JSON.parse(jsonData)

  return {
    props: {
      products: data.products
    }
  }
}

export default Products
