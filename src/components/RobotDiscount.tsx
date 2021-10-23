import React, { useContext } from 'react'
import styles from './Robot.module.css'
import { appContext, appSetStateContext } from '../AppState'
import { useAddToCart } from './AddToCart'
import { RobotProps } from './Robots'

// React.FC = functional component 函数组件的缩写，代表是函数式组件的接口
// 接口接受一个泛型类型 P , P 就是 props; FC<P = {}> = FunctionComponent<P>;
const RobotDiscount: React.FC<RobotProps> = ({ id, name, email }) => {
  const value = useContext(appContext)
  const addToCart = useAddToCart()
  return (
    <div className={styles.cardContainer}>
      <img alt="robot" src={`https://robohash.org/${id}`} />
      <h2>打折商品</h2>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>作者：{value.username}</p>
      <button onClick={() => {addToCart?.(id, name)}}>加入购物车
      </button>
    </div>
  )
}

export default RobotDiscount
