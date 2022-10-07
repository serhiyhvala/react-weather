import React from 'react'
import { Days } from './Days/Days'
import styles from './Home.module.scss'
import { ThisDay } from './ThisDay/ThisDay'
import { ThisDayInfo } from './ThisDayInfo/ThisDayInfo'
type Props = {}

export const Home = (props: Props) => {
  return (
    <div className={styles.home}>
      <p className={styles.wrapper}>
        <ThisDay />
        <ThisDayInfo />
      </p>
      <Days/>
    </div>
  )
}
