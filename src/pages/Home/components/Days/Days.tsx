import React from 'react'
import { Card } from './Card'
import styles from './Days.module.scss'

type Props = {}

export interface Day {
  day: string
  day_info: string
  icon_id: string
  temp_day: string
  temp_night: string
  info: string
}

const days: Day[] = [
  {
    day: 'Today',
    day_info: '28 aug',
    icon_id: 'sun',
    temp_day: '+18',
    temp_night: '+15',
    info: 'Cloudy'
  },
  {
    day: 'Tomorrow',
    day_info: '29 aug',
    icon_id: 'small_rain_sun',
    temp_day: '+18',
    temp_night: '+15',
    info: 'Little rain and sun'
  },
  {
    day: 'Wd',
    day_info: '30 aug',
    icon_id: 'small_rain',
    temp_day: '+18',
    temp_night: '+15',
    info: 'Little rain'
  },
  {
    day: 'Th',
    day_info: '28 aug',
    icon_id: 'mainly_cloudy',
    temp_day: '+18',
    temp_night: '+15',
    info: 'Cloudy'
  },
  {
    day: 'Fr',
    day_info: '28 aug',
    icon_id: 'rain',
    temp_day: '+18',
    temp_night: '+15',
    info: 'Cloudy'
  },
  {
    day: 'St',
    day_info: '28 aug',
    icon_id: 'sun',
    temp_day: '+18',
    temp_night: '+15',
    info: 'Cloudy'
  },
  {
    day: 'Sn',
    day_info: '28 авг',
    icon_id: 'sun',
    temp_day: '+18',
    temp_night: '+15',
    info: 'Cloudy'
  }
]

export const Days = (props: Props) => {
  return <div className={styles.days}>{days.map((day: Day) => (
    <Card day={day}/>
  ))}</div>
}
