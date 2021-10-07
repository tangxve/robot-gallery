import React from 'react'
import styles from './ShoppingCart.module.css'

interface Props {

}

// 组件自己的状态
interface State {
  isOpen: boolean
}

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

export default ShoppingCart
