import React from 'react';
import styled from 'styled-components';
import Day from 'api/day.class';
import { format } from 'date-fns';
import { useHistory } from 'react-router-dom';
import { da } from 'date-fns/locale';

export const Card = styled.div`
	padding: 10px 4px;
	border-bottom: 1px solid lightgrey;
	text-align: center;
`;

export const Tag = styled.span<{ textColor?: string }>`
	padding: 4px 5px;
	border: 1px solid black;
	border-radius: 7px;
	background-color: ${(props) => props.color};
	color: ${(props) => props.textColor || 'black'};
	white-space: nowrap;
	margin: 2px;
`;

interface FoodPlanCardProps {
	day: Day;
}

const FoodPlanCard = ({ day }: FoodPlanCardProps) => {
	const history = useHistory();

	return (
		<Card>
			<h5 style={{ textAlign: 'center', textTransform: 'capitalize' }}>
				{format(new Date(day.date), 'EEEE (dd-MM-yyyy)', { locale: da })}
			</h5>
			<div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
				{day.recipes.map((r) => (
					<Tag onClick={() => history.push(`/day/${day.id}/${r.id}`)}>{r.name}</Tag>
				))}
				<Tag onClick={() => history.push(`/day/${day.id}/new`)}>+</Tag>
			</div>
		</Card>
	);
};

export default FoodPlanCard;
