import React, { useContext } from 'react'
import { appSetStateContext } from '../AppState'
import { RobotProps, AddToCartFn } from './Robots'

// 高阶函数 with xxx
export const withAddToCart = (ChildComponent: React.ComponentType<RobotProps>) => {
  // return class extends React.Component<any, any>

  return (props: RobotProps) => {
    const setState = useContext(appSetStateContext)

    const addToCart: AddToCartFn = (id, name) => {
      if (setState) {
        setState((state: any) => {
          return {
            ...state,
            shoppingCart: {
              items: [...state.shoppingCart.items, { id, name }]
            }
          }
        })
      }
    }
    return <ChildComponent {...props as RobotProps} addToCart={addToCart} />
  }
}


// 自定义 hook
export const useAddToCart = () => {
  const setState = useContext(appSetStateContext)

  const addToCart: AddToCartFn = (id, name) => {
    if (setState) {
      setState((state: any) => {
        return {
          ...state,
          shoppingCart: {
            items: [...state.shoppingCart.items, { id, name }]
          }
        }
      })
    }
  }
  return addToCart
}
