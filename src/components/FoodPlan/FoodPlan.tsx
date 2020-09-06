import React, { useState } from 'react';
import FoodPlanCard from './FoodPlanCard';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import { da } from 'date-fns/esm/locale';
import 'react-datepicker/dist/react-datepicker.css';
import { Button } from 'react-bootstrap';
import { Card } from 'components/FoodPlan/FoodPlanCard';
import { addDays } from 'date-fns';
registerLocale('da', da);
setDefaultLocale('da');

interface FoodPlanProps {}

const FoodPlan = (props: FoodPlanProps) => {
	const [startDate, setStartDate] = useState(new Date());
	const days = [];
	const nextDay = addDays(days[days.length - 1], 1);

	return (
		<div>
			<div style={{ textAlign: 'center', borderBottom: '1px solid lightgrey', padding: '5px' }}>
				<DatePicker
					dateFormat="dd/MM/yyyy"
					selected={startDate}
					onChange={(date: Date) => setStartDate(date)}
				/>
			</div>
			{days.length === 0 && <Card>Ingen dage oprettet i 7 dage efter den valgte dato...</Card>}
			{days.map((d) => (
				<FoodPlanCard />
			))}
			<div style={{ height: '5px' }} />
			{days.length !== 7 && (
				<Button variant="outline-success" block>
					+ Tilføj dag
				</Button>
			)}
		</div>
	);
};

export default FoodPlan;
