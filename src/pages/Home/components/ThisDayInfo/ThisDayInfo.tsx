import React from 'react'
import styles from './ThisDayInfo.module.scss'
import cloud from '../../../../assets/images/cloud.png'
import { ThisDayItem } from './ThisDayItem'

type Props = {}

export interface Item {
  iconId: string
  name: string
  value: string
}

export const ThisDayInfo = (props: Props) => {
  const items = [
    {
      iconId: 'temp',
      name: 'Temperature',
      value: '20°'
    },
    {
      iconId: 'pressure',
      name: 'Pressure',
      value: '765 mm - normal'
    },
    {
      iconId: 'precipitation',
      name: 'Precipitation',
      value: 'Without Precipitation'
    },
    {
      iconId: 'wind',
      name: 'Wind',
      value: '3 m/s'
    }
  ]
  return (
    <div className={styles.this_day_info}>
      <div className={styles.this_day_info_items}>
        {items.map((item: Item) => (
          <ThisDayItem key={item.iconId} item={item}/>
        ))}
      </div>
      <img className={styles.cloud_image} src={cloud} alt="" />
    </div>
  )
}
