import React from 'react';
import styles from './FormContainer.module.scss';

interface IFormContainer {
	children?: React.ReactNode;
}

export default function FormContainer(props: IFormContainer) {
  return (
	 <form className={styles.form}>
		{props.children}
	 </form>
  )
}
