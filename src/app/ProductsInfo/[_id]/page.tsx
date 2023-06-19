import UpcommingProductsInfo from '@/components/UpcomingProductsInfo'
import React from 'react'

const page = (props:any) => {
  return (
    <div className='mt-28'>
      
      <UpcommingProductsInfo {...props} />
    </div>
  )
}

export default page
