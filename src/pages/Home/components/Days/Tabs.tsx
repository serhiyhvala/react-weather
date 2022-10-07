import React from 'react'
import styles from './Days.module.scss'

type Props = {}

export const Tabs = (props: Props) => {
  const tabs = [
    {
      value: 'For a week'
    },
    {
      value: 'For 10 days'
    },
    {
      value: 'For a month'
    }
  ]
  return (
    <div className={styles.tabs}>
      <div className={styles.tabs_wrapper}>
        {tabs.map(tab => (
          <div className={styles.tab} key={tab.value}>
            {tab.value}
          </div>
        ))}
      </div>
      <div className={styles.cancel}>Cancel</div>
    </div>
  )
}
