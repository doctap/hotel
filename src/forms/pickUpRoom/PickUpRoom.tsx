import React from 'react';
import LongSubmit from '../../components/buttons/submit/LongSubmit';
import DateDropdown from '../../components/dateDropdown/DateDropdown';
import DropDownList from '../../components/dropdownList/drop_Down_List/DropDownList';
import SubTitle from '../../components/titles/subTitle/SubTitle';
import TitleH2 from '../../components/titles/titleH2/TitleH2';
import FormContainer from '../containers/formContainer/FormContainer';
import styles from './PickUpRoom.module.scss';

export default function PickUpRoom() {
	return (
		<FormContainer>

			<div className={styles.title}>
				<TitleH2 value='Найдём номера под ваши пожелания' />
			</div>

			<div className={styles.inputs}>
				<div className={styles.period}>
					<div className={styles.arrival}>
						<div className={styles.arrivalTitle}>
							<SubTitle name='прибытие' />
							<DateDropdown />
						</div>
					</div>
					<div className={styles.departure}>
						<div className={styles.departureTitle}>
							<SubTitle name='выезд' />
							<DateDropdown />
						</div>
					</div>
				</div>
				<div className={styles.visitors}>
					<div className={styles.visitorsTitle}>
						<SubTitle name='гости' />
					</div>
					<div className={styles.DropDownList}>
						<DropDownList name='Сколько гостей' />
					</div>
				</div>
			</div>

			<div className={styles.BtnSubmit}>
				<LongSubmit name='подобрать номер' type='submit' />
			</div>

		</FormContainer>
	)
}
