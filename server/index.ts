/* eslint-disable */
import dotenv from 'dotenv-flow';
dotenv.config({ default_node_env: 'development' });
import express from 'express';
import path from 'path';
import apollo from 'config/apolloServer';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import './config/objection';
import User from 'models/user.model';
const app = express();
const port = process.env.PORT || 3001;

app.use(helmet());
app.use(cookieParser());
app.use(async (req: any, res, next) => {
	const token = req.cookies?.user;

	try {
		if (token) {
			const user = User.query().findById(token.id);
			if (user) {
				req.user = user;
			} else {
				req.user = null;
				res.cookie('user', null, { expires: new Date(0) });
			}
		}
	} catch (error) {
		req.user = null;
		res.cookie('user', null, { expires: new Date(0) });
	} finally {
		next();
	}
});

apollo.applyMiddleware({ app });

// Serve index.js
app.use(express.static(path.join(__dirname, '..')));
app.get('*', function (req, res) {
	res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.listen(port, () => {
	console.log(`Server started on http://localhost:${port}`);
});
