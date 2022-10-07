import React from 'react'
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector'
import { Day } from './Days'
import styles from './Days.module.scss'

interface Props {
  day: Day
}

export const Card = ({ day }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.day}>{day.day}</div>
      <div className={styles.day_info}>{day.day_info}</div>
      <div className={styles.img}>
        <GlobalSvgSelector id={day.icon_id}/>
      </div>
      <div className={styles.day_temp}>{day.temp_day}</div>
      <div className={styles.night_temp}>{day.temp_night}</div>
      <div className={styles.day_info}>{day.day_info}</div>
      <div className={styles.info}>{day.info}</div>
    </div>
  )
}
