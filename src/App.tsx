import React from 'react'
import robots from './mockdata/robots.json'
import Robot from './components/Robots'
import logo from './assets/images/logo.svg'
// import './App.module.css'
// 通过对象的方式引入进来，防止命名冲突
import styles from './App.module.css'
import ShoppingCart from './components/ShoppingCart'

interface Props {}

interface State {
  robotGallery: any[]
}

class App extends React.Component<Props, State> {
  // * 生命周期第一阶段：初始化
  // 初始化组件 state
  constructor(props: Props) {
    super(props)
    this.state = {
      robotGallery: []
    }
  }

  // 在组件创建好dom元素以后，挂载进页面的时候调用，只会调用一次
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then((data) => this.setState({ robotGallery: data }))
  }

  // * 生命周期第二个阶段：更新
  // 在组件接收一个新的 prop（更新后）时被调用
  // 已经被废弃（会产生副作用）
  // componentWillReceiveProps(nextProps: Readonly<Props>, nextContext: any) {}

  // 组件初始化和组件更新的时候被调用
  // static getDerivedStateFromProps(props, state)

  // 判断是否更新，返回一个布尔值
  // shouldComponentUpdate(nextProps, nextState, nextContext: any): boolean {
  //  return nextState.name !== this.state.name
  // }


  // 组件更新后调用 组件发生更新，UI重新渲染整个函数会被调用
  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any) {}

  // * 生命周期第三个阶段：销毁
  // 组件销毁后调用
  // 这个函数可以回收各种监听以及事件，用来防止可能存在内存泄漏
  componentWillUnmount() {}

  render() {
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img className={styles.appLogo} src={logo} alt="logo" />
          <h1>机器人购物平台</h1>
        </div>
        <ShoppingCart />
        <div className={styles.robotList}>
          {this.state.robotGallery.map(r => (
            <Robot key={r.id} id={r.id} name={r.name} email={r.email} />
          ))}
        </div>
      </div>
    )
  }


}

export default App
