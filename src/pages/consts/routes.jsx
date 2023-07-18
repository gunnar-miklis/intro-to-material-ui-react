import Authentication from '../Authentication/Authentication';
import Database from '../Database/Database';
import Functions from '../Functions/Functions';
import Hosting from '../Hosting/Hosting';
import MachineLearning from '../MachineLearning/MachineLearning';
import Storage from '../Storage/Storage';

export const routes = [
	{
		id: 1,
		path: 'authentication',
		element: <Authentication/>,
	},
	{
		id: 2,
		path: 'database',
		element: <Database/>,
	},
	{
		id: 3,
		path: 'functions',
		element: <Functions/>,
	},
	{
		id: 4,
		path: 'hosting',
		element: <Hosting/>,
	},
	{
		id: 5,
		path: 'machine-learning',
		element: <MachineLearning/>,
	},
	{
		id: 6,
		path: 'storage',
		element: <Storage/>,
	},
];
