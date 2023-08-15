import FormInputValidationSearchbar from '../FormInputValidationSearchbar/FormInputValidationSearchbar';
import ProgressStepper from '../ProgressStepper/ProgressStepper';
import SkeletonSnackbar from '../SkeletonSnackbar/SkeletonSnackbar';
import DynamicDataTable from '../DynamicDataTable/DynamicDataTable';

export const routes = [
	{
		id: 1,
		path: 'form-input-validation-and-searchbar',
		element: <FormInputValidationSearchbar/>,
	},
	{
		id: 2,
		path: 'progress-stepper',
		element: <ProgressStepper/>,
	},
	{
		id: 3,
		path: 'skeleton-and-snackbar',
		element: <SkeletonSnackbar/>,
	},
	{
		id: 4,
		path: 'dynamic-data-table',
		element: <DynamicDataTable/>,
	},
];
