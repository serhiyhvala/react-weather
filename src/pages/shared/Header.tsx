import React from 'react'
import Select from 'react-select'
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector'
import styles from './Header.module.scss'

type Props = {}

export const Header = (props: Props) => {
  const options = [
    { value: 'city-1', label: 'Kyiv' },
    { value: 'city-2', label: 'Kharkiv' },
    { value: 'city-3', label: 'Ternopil' }
  ]

  const ColorStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: 0 ? '#4f4f4f' : 'rgba(71, 147, 255, 0.2)',
      width: '194px',
      height: '37px',
      border: 'none',
      borderRadius: '10px',
      zIndex: '100',
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: 0 ? '#fff' : '#000'
    })
  }

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <GlobalSvgSelector id="header-logo" />
        </div>
        <div className={styles.title}>React Weather</div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.change_theme}>
          <GlobalSvgSelector id="change-theme" />
        </div>
        <Select defaultValue={options[0]} options={options} styles={ColorStyles} placeholder='Choose Your City'/>
      </div>
    </header>
  )
}
