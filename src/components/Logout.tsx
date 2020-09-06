import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export interface LogoutProps {}

const Logout: React.SFC<LogoutProps> = () => {
	const history = useHistory();

	useEffect(() => {
		const logout = async () => {
			// Logout
			history.push('/');
		};

		logout();
	}, [history]);

	return null;
};

export default Logout;
