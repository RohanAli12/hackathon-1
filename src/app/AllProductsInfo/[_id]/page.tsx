import ProductDetail from '@/components/ProductDetail'
import React from 'react'

const page = (props:any) => {
  return (
    <div className='mt-28'>   
      <ProductDetail {...props} />
    </div>
  )
}

export default page
