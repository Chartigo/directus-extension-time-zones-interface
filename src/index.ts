import { defineInterface } from '@directus/extensions-sdk';
import InterfaceComponent from './interface.vue';

export default defineInterface({
	id: 'time_zones',
	name: 'Time Zones',
	icon: 'schedule', // Changed from 'box' to 'schedule'
	description: 'Select from available IANA time zones',
	component: InterfaceComponent,
	types: ['string'],
	options: ({ relations }) => {
		const collection = relations.m2o?.related_collection;
		console.log(collection);
		return [
			{
				field: 'placeholder',
				name: '$t:placeholder',
				type: 'string',
				meta: {
					width: 'half',
					interface: 'system-input-translated-string',
					options: {
						placeholder: '$t:enter_a_placeholder',
					},
				},
			},
		];
	},
});
