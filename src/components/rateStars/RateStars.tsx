import React from 'react';
import styles from './RateStars.module.scss'

interface IRateStars {
	value: number;
}

export default function RateStars(props: IRateStars) {



	return (
		<div>

			{
				props.value === 0 ?
					<div className={styles.stars}>
						<div className={styles.starBorder}></div>
						<div className={styles.starBorder}></div>
						<div className={styles.starBorder}></div>
						<div className={styles.starBorder}></div>
						<div className={styles.starBorder}></div>
					</div>
					:
					props.value === 1 ?
						<div className={styles.stars}>
							<div className={styles.starPrimary}></div>
							<div className={styles.starBorder}></div>
							<div className={styles.starBorder}></div>
							<div className={styles.starBorder}></div>
							<div className={styles.starBorder}></div>
						</div>
						:
						props.value === 2 ?
							<div className={styles.stars}>
								<div className={styles.starPrimary}></div>
								<div className={styles.starPrimary}></div>
								<div className={styles.starBorder}></div>
								<div className={styles.starBorder}></div>
								<div className={styles.starBorder}></div>
							</div>
							:
							props.value === 3 ?
								<div className={styles.stars}>
									<div className={styles.starPrimary}></div>
									<div className={styles.starPrimary}></div>
									<div className={styles.starPrimary}></div>
									<div className={styles.starBorder}></div>
									<div className={styles.starBorder}></div>
								</div>
								:
								props.value === 4 ?
									<div className={styles.stars}>
										<div className={styles.starPrimary}></div>
										<div className={styles.starPrimary}></div>
										<div className={styles.starPrimary}></div>
										<div className={styles.starPrimary}></div>
										<div className={styles.starBorder}></div>
									</div>
									:
									props.value === 5 ?
										<div className={styles.stars}>
											<div className={styles.starPrimary}></div>
											<div className={styles.starPrimary}></div>
											<div className={styles.starPrimary}></div>
											<div className={styles.starPrimary}></div>
											<div className={styles.starPrimary}></div>
										</div>
										: null
			}


		</div>
	)
}
