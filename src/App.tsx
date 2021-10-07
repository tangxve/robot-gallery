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
  constructor(props: Props) {
    super(props)
    this.state = {
      robotGallery: []
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
  }

  render() {
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img className={styles.appLogo} src={logo} alt="logo" />
          <h1>机器人购物平台</h1>
        </div>
        <ShoppingCart />
        <div className={styles.robotList}>
          {robots.map(r => (
            <Robot id={r.id} name={r.name} email={r.email} />
          ))}
        </div>
      </div>
    )
  }


}

export default App
