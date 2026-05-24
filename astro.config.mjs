// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightOpenAPI, { openAPISidebarGroups } from 'starlight-openapi';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'ORB',
			customCss: ['./src/styles/custom.css'],
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/MohannadEhabBarakat' },
				{ icon: 'pencil', label: 'Tool', href: 'https://annotator-seven.vercel.app/' },
			],
			plugins: [
				starlightOpenAPI([
					{
						base: 'backend/api',
						label: 'API',
						schema: './openapi.json',
						collapsed: true,
					},
				]),
			],
			sidebar: [
				{
					label: 'Getting Started',
					collapsed: true,
					items: [{ autogenerate: { directory: 'gettingStarted', collapsed: true } }],
				},
				{
					label: 'Tutorials',
					collapsed: true,
					items: [
						{ slug: 'tutorials/simpleexample' },
						{ slug: 'tutorials/gettingstarted' },
						{ slug: 'tutorials/study' },
					],
				},
				{
					label: 'Backend',
					collapsed: true,
					items: [
						{ autogenerate: { directory: 'backend', collapsed: true } },
						...openAPISidebarGroups,
					],
				},
				{
					label: 'Analysis',
					collapsed: true,
					items: [{ autogenerate: { directory: 'analysis', collapsed: true } }],
				},
				{
					label: 'Limitations',
					collapsed: true,
					items: [{ autogenerate: { directory: 'limitations', collapsed: true } }],
				},
				{
					label: 'Reference',
					collapsed: true,
					items: [{ autogenerate: { directory: 'reference', collapsed: true } }],
				},
				{
					label: 'API Playground',
					slug: 'playground',
					badge: { text: 'Try it', variant: 'tip' },
				},
			],
		}),
	],
});
