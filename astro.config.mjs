// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightOpenAPI, { openAPISidebarGroups } from 'starlight-openapi';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'ORB',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/MohannadEhabBarakat' }],
			plugins: [
				starlightOpenAPI([
					{
						base: 'backend/api',
						label: 'API',
						schema: './openapi.json',
					},
				]),
			],
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
				items: [
					{ autogenerate: { directory: 'backend' } },
					...openAPISidebarGroups,
				],
			},
			{
				label: 'API Playground',
				slug: 'playground',
				badge: { text: 'Try it', variant: 'tip' },
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
