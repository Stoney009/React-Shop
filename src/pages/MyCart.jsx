import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import CartSection from '../components/CartSection'
import Total from '../components/Total'

const MyCart = () => {
  return (
   <>
   <Breadcrumb currentPage="My Cart"/>
   <CartSection/>
   <Total/>
   </>
  )
}

export default MyCart