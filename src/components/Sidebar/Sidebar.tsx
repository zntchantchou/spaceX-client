import React from 'react'
import styles from './Sidebar.module.css';
import Launches from './Launches/Launches';

interface Props {}

function SideBar(props: Props) {
  const {} = props

  return (
    <div className={styles.SideBar}>
      <Launches />
    </div>
  )
}

export default SideBar
