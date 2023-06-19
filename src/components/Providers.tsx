import { store } from '../../store/store';
import React, { ReactNode } from 'react'
import { Provider } from 'react-redux';
import RootLayout from '@/app/layout';

interface Props{
  children:ReactNode;
}

const Providers = (props:Props) => {
  return ( 
    <Provider store={store}>
      {props.children}
    </Provider>
  )
}

export default Providers
