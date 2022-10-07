import React from 'react'
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector'
import styles from './ThisDay.module.scss'

type Props = {}

export const ThisDay = (props: Props) => {
  return (
    <div className={styles.this_day}>
      <div className={styles.top_block}>
        <div className={styles.top_block_wrapper}>
          <div className={styles.this_temp}>20°</div>
          <div className={styles.this_day_name}>Today</div>
        </div>
        <GlobalSvgSelector id='sun'/>
      </div>
      <div className={styles.bottom_block}>
        <div className={styles.this_time}>
          Time: <span>21:54</span>
        </div>
        <div className={styles.this_city}>City: <span>Kyiv</span></div>
      </div>
    </div>
  )
}
