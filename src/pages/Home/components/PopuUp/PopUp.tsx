import React from 'react'
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector'
import { Item } from '../ThisDayInfo/ThisDayInfo'
import { ThisDayItem } from '../ThisDayInfo/ThisDayItem'
import styles from './PopUp.module.scss'

interface Props {
  // items: Item[]
}

export const PopUp = (props: Props) => {
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
    <>
      <div className={styles.blur}></div>
      <div className={styles.popup}>
        <div className={styles.day}>
          <div className={styles.temp_day}>20°</div>
          <div className={styles.day_name}>Monday</div>
          <div className={styles.img}>
            <GlobalSvgSelector id='sun'/>
          </div>
          <div className={styles.day_time}>
            Time: <span>21:54</span>
          </div>
          <div className={styles.day_city}>Kyiv</div>
        </div>
        <div className={styles.this_day_info_items}>
          {items.map((item: Item) => (
            <ThisDayItem key={item.iconId} item={item} />
          ))}
        </div>
        <div className={styles.close_icon}>
          <GlobalSvgSelector id="close" />
        </div>
      </div>
    </>
  )
}
