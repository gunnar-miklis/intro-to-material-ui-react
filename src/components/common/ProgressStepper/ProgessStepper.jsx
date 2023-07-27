import { Box, Step, StepLabel, Stepper, Typography } from '@mui/material';
import CommonButton from './../../common/CommonButton/CommonButton';
import { useState } from 'react';
import { progressStepperStyles } from './styles';


export default function ProgessStepper( { steps, stepDescription } ) {
	const [ activeStep, setActiveStep ] = useState( 0 );
	const [ completed, setCompleted ] = useState( {} );

	const totalSteps = steps.length;
	const completedSteps = Object.keys( completed ).length;
	const allStepsCompleted = completedSteps === totalSteps;

	console.log( completed );

	function handleBack() {
		setActiveStep( activeStep - 1 );
	}
	function handleNext() {
		const newCompleted = completed;
		newCompleted[activeStep] = true;
		setCompleted( newCompleted );
		setActiveStep( activeStep + 1 );
	}
	function handleReset() {
		setActiveStep( 0 );
		setCompleted( {} );
	}
	return (
		<>
			<Stepper activeStep={activeStep} orientation='vertical'>
				{ steps.map( ( step, idx ) => (
					<Step key={step} completed={completed[idx]}>
						<StepLabel>{step}</StepLabel>
					</Step> ) )}
			</Stepper>
			<Box sx={progressStepperStyles.description}>
				{ allStepsCompleted ?
					<>
						<Typography
							sx={progressStepperStyles.typo}
						>
							All Steps Completed
						</Typography>
						<Box sx={progressStepperStyles.buttonWrapper}>
							<CommonButton
								onClick={handleReset}
								variant='contained'
							>
								Reset
							</CommonButton>
						</Box>
					</>
					:
					<>
						<Typography
							sx={progressStepperStyles.typo}
						>
							{stepDescription[activeStep]}
						</Typography>
						<Box sx={progressStepperStyles.buttonWrapper}>
							<CommonButton
								onClick={handleBack}
								variant='contained'
								disabled={activeStep === 0}
							>
							Back
							</CommonButton>
							<CommonButton
								onClick={handleNext}
								variant='contained'
								disabled={activeStep === totalSteps}
							>
								{ completedSteps === totalSteps - 1 ?
									'Finish' :
									'Next' }
							</CommonButton>
						</Box>
					</>
				}

			</Box>
		</>
	);
}
