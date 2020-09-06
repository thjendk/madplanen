import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

export const MenuBar = styled.header`
	display: flex;
	margin: 0;
	background-color: darkolivegreen;
	color: white;
	justify-content: space-between;

	@media screen and (max-width: 600px) {
		flex-wrap: wrap;
	}
`;

export const MenuItem = styled.div`
	display: flex;
	align-items: center;
	margin: 0;
	padding: 5px 10px;
	cursor: ${(props) => (props.onClick ? 'pointer' : null)};

	:hover {
		background-color: ${(props) => (props.onClick ? '#4a5e2a' : null)};
	}

	@media screen and (max-width: 600px) {
		text-align: center;
		font-size: 0.9em;
	}
`;

export interface HeaderProps {}

const Header: React.SFC<HeaderProps> = () => {
	const history = useHistory();

	return (
		<MenuBar>
			<MenuItem
				onClick={() => history.push('/')}
				style={{ width: '100%', margin: '0 auto', justifyContent: 'center' }}
			>
				Boilerplate
			</MenuItem>
		</MenuBar>
	);
};

export default Header;
