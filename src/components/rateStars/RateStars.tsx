import React, { ReactElement, useState } from 'react';
import styles from './RateStars.module.scss'

interface IRateStars {
	value: number;
}

export default function RateStars(props: IRateStars) {

	const [container, setContainer] = useState<ReactElement>();

	if (props.value === 3) {
		setContainer(
			<div className={styles.stars}>
				<div className={styles.Star}>star_border</div>
				<div className={styles.Star}>star_border</div>
				<div className={styles.Star}>star_border</div>
				<div className={styles.Star}>star_border</div>
				<div className={styles.Star}>star_border</div>
			</div>
		)
	}

	return (
		{ container }
	)
}

	// if (props.value === 0) {
	// 	return (
	// 		<div className={styles.stars}>
	// 			<div className={styles.Star}>star_border</div>
	// 			<div className={styles.Star}>star_border</div>
	// 			<div className={styles.Star}>star_border</div>
	// 			<div className={styles.Star}>star_border</div>
	// 			<div className={styles.Star}>star_border</div>
	// 		</div>
	// 	)
	// } else if (props.value === 1) {
	// 	return (
	// 		<div className={styles.stars}>
	// 			<div className={styles.Star}>star</div>
	// 			<div className={styles.Star}>star_border</div>
	// 			<div className={styles.Star}>star_border</div>
	// 			<div className={styles.Star}>star_border</div>
	// 			<div className={styles.Star}>star_border</div>
	// 		</div>
	// 	)
	// } else if (props.value === 2) {
	// 	return (
	// 		<div className={styles.stars}>
	// 			<div className={styles.Star}>star</div>
	// 			<div className={styles.Star}>star</div>
	// 			<div className={styles.Star}>star_border</div>
	// 			<div className={styles.Star}>star_border</div>
	// 			<div className={styles.Star}>star_border</div>
	// 		</div>
	// 	)
	// } else if (props.value === 3) {
	// 	return (
	// 		<div className={styles.stars}>
	// 			<div className={styles.Star}>star</div>
	// 			<div className={styles.Star}>star</div>
	// 			<div className={styles.Star}>star</div>
	// 			<div className={styles.Star}>star_border</div>
	// 			<div className={styles.Star}>star_border</div>
	// 		</div>
	// 	)
	// } else if (props.value === 4) {
	// 	return (
	// 		<div className={styles.stars}>
	// 			<div className={styles.Star}>star</div>
	// 			<div className={styles.Star}>star</div>
	// 			<div className={styles.Star}>star</div>
	// 			<div className={styles.Star}>star</div>
	// 			<div className={styles.Star}>star_border</div>
	// 		</div>
	// 	)
	// } else if (props.value === 5) {
	// 	return (
	// 		<div className={styles.stars}>
	// 			<div className={styles.Star}>star</div>
	// 			<div className={styles.Star}>star</div>
	// 			<div className={styles.Star}>star</div>
	// 			<div className={styles.Star}>star</div>
	// 			<div className={styles.Star}>star</div>
	// 		</div>
	// 	)
	// }



