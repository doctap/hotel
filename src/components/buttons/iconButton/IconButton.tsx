import React from 'react'
import { ButtonType, HEX, IconType } from '../../../types';
import styles from './IconButton.module.scss';

interface IIconButton {
  onClick: () => void
  color: HEX
  type: ButtonType
  icon: IconType
}

export const IconButton = (props: IIconButton) => {
  return (
    <button
      onClick={props.onClick}
      color={props.color}
      type={props.type}
      className={styles.iconButton}
    >
      {props.icon}
    </button>
  )
}
