import React, { useContext } from 'react'
import styles from './Robot.module.css'
import { appContext, appSetStateContext } from '../AppState'
import { withAddToCart } from './AddToCart'

export interface RobotProps<T = number | string> {
  id: T,
  name: string,
  email: string
  addToCart?: AddToCartFn
}

export interface AddToCartFn {
  (id: number | string, name: string): void
}

// React.FC = functional component 函数组件的缩写，代表是函数式组件的接口
// 接口接受一个泛型类型 P , P 就是 props; FC<P = {}> = FunctionComponent<P>;
const Robot: React.FC<RobotProps> = ({ id, name, email, addToCart }) => {
  const value = useContext(appContext)
  return (
    <div className={styles.cardContainer}>
      <img alt="robot" src={`https://robohash.org/${id}`} />
      <h2>{name}</h2>
      <p>{email}</p>
      <p>作者：{value.username}</p>
      <button onClick={() => addToCart?.(id, name)}>加入购物车
      </button>
    </div>
  )
}

export default withAddToCart(Robot)
