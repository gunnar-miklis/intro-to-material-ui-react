import GridWrapper from '../../components/common/GridWrapper/GridWrapper';
import BasicCard from '../../components/common/BasicCard/BasicCard';
import ProgessStepper from '../../components/common/ProgressStepper/ProgessStepper';

const steps = [ 'Step 1', 'Step 2', 'Step 3', 'Step 4' ];
const stepDescription = [
	'Description 1️',
	'Description 2️ Description 2️',
	'Description 3️ Description 3️ Description 3️',
	'Description 4️ Description 4️ Description 4️ Description 4️',
];

export default function Database() {
	return (
		<>
			<GridWrapper>
				<BasicCard
					content={
						<ProgessStepper
							steps={steps}
							stepDescription={stepDescription}
						/>
					}
				/>

			</GridWrapper>
		</>
	);
}
