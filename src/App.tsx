import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Frontpage from 'components/Frontpage';
import Header from 'components/Header';
import Footer from 'components/Footer';

const Layout = styled.div`
	display: flex;
	flex-direction: column;
	margin: 5px auto;
	width: 100%;
	max-width: 1200px;
`;

export interface AppProps {}

const App: React.SFC<AppProps> = () => {
	useEffect(() => {
		// Login?
	}, []);

	return (
		<div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
			<Header />
			<Layout>
				<Switch>
					<Route path="/" component={Frontpage} />
				</Switch>
			</Layout>
			<div style={{ flexGrow: 1 }} />
			<Footer />
		</div>
	);
};

export default App;
