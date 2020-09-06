import React from 'react';
import { MenuBar, MenuItem } from 'components/Header';
import { BsHeartFill } from 'react-icons/bs';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const Divider = styled.div`
	margin: 5px;
	border-bottom: '1px solid lightgrey';
`;

export interface FooterProps {}

const Footer: React.SFC<FooterProps> = () => {
	return (
		<>
			<Button block variant="outline-success">
				Ny opskrift
			</Button>
			<div style={{ height: '5px' }} />
			<MenuBar style={{ justifyContent: 'space-around' }}>
				<MenuItem style={{ whiteSpace: 'nowrap' }}>
					<BsHeartFill style={{ marginRight: '5px', fontSize: '0.9em' }} />
					Made by Thomas Jensen
				</MenuItem>
			</MenuBar>
		</>
	);
};

export default Footer;
