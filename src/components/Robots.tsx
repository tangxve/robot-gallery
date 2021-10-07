import React from 'react'
import styles from './Robot.module.css'

interface RobotProps {
  id: number,
  name: string,
  email: string
}

// React.FC = functional component 函数组件的缩写，代表是函数式组件的接口
// 接口接受一个泛型类型 P , P 就是 props; FC<P = {}> = FunctionComponent<P>;
const Robot: React.FC<RobotProps> = (props) => {
  const { id, name, email } = props
  return (
    <div className={styles.cardContainer}>
      <img alt="robot" src={`https://robohash.org/${id}`} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  )
}

export default Robot
