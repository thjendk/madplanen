import React from 'react';
import styled from 'styled-components';

export const Card = styled.div`
	padding: 10px 4px;
	border-bottom: 1px solid lightgrey;
	text-align: center;
`;

const Tag = styled.span<{ textColor?: string }>`
	padding: 1px 5px;
	border: 1px solid black;
	border-radius: 7px;
	background-color: ${(props) => props.color};
	color: ${(props) => props.textColor || 'black'};
	white-space: nowrap;
	margin: 2px;
`;

interface FoodPlanCardProps {}

const FoodPlanCard = (props: FoodPlanCardProps) => {
	return (
		<Card>
			<h5 style={{ textAlign: 'center' }}>Mandag (1/1-2020)</h5>
			<div style={{ textAlign: 'center' }}>
				<Tag>Chili con carne</Tag>
				<Tag>+</Tag>
			</div>
		</Card>
	);
};

export default FoodPlanCard;
