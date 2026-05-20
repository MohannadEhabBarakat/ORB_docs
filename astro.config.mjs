// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'ORB',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/MohannadEhabBarakat' }],
			sidebar: [
				{
					label: 'Getting Started',
					items: [{ autogenerate: { directory: 'gettingStarted' } }],
				},
				{
					label: 'Tutorials',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Simple Example', slug: 'tutorials/simpleexample' },
					],
				},
				{
					label: 'Backend',
					items: [{ autogenerate: { directory: 'backend' } }],
				},
				{
					label: 'Analysis',
					items: [{ autogenerate: { directory: 'analysis' } }],
				},
				{
					label: 'Limitations',
					items: [{ autogenerate: { directory: 'limitations' } }],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
