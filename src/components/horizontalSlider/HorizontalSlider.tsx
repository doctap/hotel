import React, { useState } from 'react';
import ReactSlider from 'react-slider';
import './stylesReactSlider/StylesReactSlider.css';
import SubTitle from '../titles/subTitle/SubTitle';
import styles from './HorizontalSlider.module.scss';
import Price from '../forms/price/Price';

interface IHorizontalSlider {
	title: string;
	minValue: number;
	maxValue: number;
}

export default function HorizontalSlider(props: IHorizontalSlider) {

	const [result, setResult] = useState<JSX.Element>(
		<>
			<div className={styles.value}>
				<Price sum={5000} variant='easy' />
			</div>
			<div className={styles.hyphen}>-</div>
			<div className={styles.value}>
				<Price sum={10000} variant='easy' />
			</div>
		</>
	);

	function qwe(points: number[]): void {
		setResult(
			<>
				<div className={styles.value}>
					<Price sum={points[0]} variant='easy' />
				</div>
				<span className={styles.hyphen}>-</span>
				<div className={styles.value}>
					<Price sum={points[1]} variant='easy' />
				</div>
			</>
		);
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.titleSlider}>
				<SubTitle name={props.title} />
				<div className={styles.values}>
					{result}
				</div>
			</div>
			<ReactSlider
				className='horizontal-slider'
				thumbClassName='example-thumb'
				trackClassName='example-track'
				defaultValue={[5000, 10000]}
				ariaLabel={['Lower thumb', 'Upper thumb']}
				ariaValuetext={state => `Thumb value ${state.valueNow}`}
				renderThumb={(props) => <div {...props}></div>}
				pearling
				minDistance={750}
				min={props.minValue}
				max={props.maxValue}
				onChange={qwe}
			/>
		</div>
	)
}
