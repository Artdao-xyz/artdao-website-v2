import type { IQuestion } from '$lib/elements/InterviewCard/interfaces';

export const interviewCardQuestions: IQuestion[] = [
	{
		question: 'write here the first question',
		response: [
			{
				name: 'John Carpenter',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at mi vitae nibh faucibus facilisis. Pellentesque porta dui sodales mattis convallis. Nunc vel euismod eros, in facilisis tortor. '
			},
			{
				name: 'David Cronenberg',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at mi vitae nibh faucibus facilisis. Pellentesque porta dui sodales mattis convallis. Nunc vel euismod eros, in facilisis tortor. '
			}
		],
		selected: false
	},
	{
		question: 'write here the second question',
		response: [
			{
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at mi vitae nibh faucibus facilisis. Pellentesque porta dui sodales mattis convallis. Nunc vel euismod eros, in facilisis tortor. Suspendisse porttitor sem vitae consequat ornare. Quisque augue nisi, consequat eleifend massa aliquet, maximus ultricies tortor. Vestibulum dictum massa tellus, ut pellentesque metus cursus id. Fusce pellentesque interdum lectus, quis molestie leo auctor id. Ut fringilla sem in tortor gravida, eget eleifend nisl placerat. Maecenas nec diam vel sem imperdiet vestibulum. Maecenas maximus volutpat augue, id dapibus odio hendrerit sed. Nunc ac nisi nec lectus malesuada dignissim vitae eu urna. Fusce tempus accumsan nisl. Donec elementum tortor felis, at mattis mauris imperdiet a. Phasellus id dui sed lacus consequat consectetur. Vestibulum sed pretium massa. Duis maximus molestie nibh sodales rutrum. Donec eleifend tempus dui vitae pulvinar. Nam urna ligula, volutpat et condimentum imperdiet, fermentum id. '
			}
		],
		selected: false
	},
	{
		question: 'write here the third question',
		response: [
			{
				name: 'Dario Argento',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at mi vitae nibh faucibus facilisis. Pellentesque porta dui sodales mattis convallis. Nunc vel euismod eros, in facilisis tortor. '
			},
			{
				name: 'George Romero',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at mi vitae nibh faucibus facilisis. Pellentesque porta dui sodales mattis convallis. Nunc vel euismod eros, in facilisis tortor. '
			}
		],
		selected: false
	},
	{
		question: 'write here the fourth question',
		response: [
			{
				name: 'Lucio Fulci',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at mi vitae nibh faucibus facilisis. Pellentesque porta dui sodales mattis convallis. Nunc vel euismod eros, in facilisis tortor. '
			},
			{
				name: 'Takashi Miike',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at mi vitae nibh faucibus facilisis. Pellentesque porta dui sodales mattis convallis. Nunc vel euismod eros, in facilisis tortor. '
			}
		],
		selected: false
	}
];
