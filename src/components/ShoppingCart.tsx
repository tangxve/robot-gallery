import React, { useContext, useState } from 'react'
import styles from './ShoppingCart.module.css'
import { appContext, appSetStateContext } from '../AppState'

interface Props {}

const ShoppingCart: React.FC<Props> = (props) => {

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const value = useContext(appContext)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.cartContainer}>
      <button className={styles.button} onClick={handleClick}>
        <span>购物车 {value.shoppingCart.items.length} 件</span>
      </button>
      <div className={styles.cartDropDown} style={{ display: isOpen ? 'block' : 'none' }}>
        <ul>
          {value.shoppingCart.items.map((i, k) => <li key={k}>{i.name}</li>)}
        </ul>
      </div>
    </div>
  )
}
export default ShoppingCart

/**
 *
 class ShoppingCart extends React.Component<Props, State> {
  // * 生命周期第一阶段：初始化
  // 构建函数 constructor 是唯一可以初始化 state 的地方
  constructor(props: Props) {
    super(props)

    this.state = {
      isOpen: false
    }
  }

  handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log('e.target', e.target)
    console.log('e.currentTarget', e.currentTarget)
    this.setState({ isOpen: !this.state.isOpen })
  }


  render() {
    return (
      <div className={styles.cartContainer}>
        <button
          className={styles.button}
          onClick={this.handleClick}
        >购物车 2 件
        </button>
        <div
          className={styles.cartDropDown}
          style={{
            display: this.state.isOpen ? 'block' : 'none'
          }}
        >
          <ul>
            <li>robot 1</li>
            <li>robot 1</li>
          </ul>
        </div>
      </div>
    )
  }
}
 */

