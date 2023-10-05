import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';
import LearningJavaScript from './LearningJavaScript';

export default function LearningComponent() {
	return (
		<div className='LearningComponent'>
			<FirstComponent></FirstComponent>
			<SecondComponent></SecondComponent>
			<ThirdComponent></ThirdComponent>
			<LearningJavaScript></LearningJavaScript>
		</div>
	)
}