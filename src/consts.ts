// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'CapLitos05';
export const SITE_DESCRIPTION = 'Página Web de Alter-Ego';

export const COLORS = {
	primary: '#ff5100',
	secondary: '#0011ff',
	white: '#ffffff',
	black: '#000000',
	transparent: 'transparent',
	overlay: 'rgba(255, 81, 0, 0.1)',
	darkRed: '#8B0000'
} as const;

export const BREAKPOINTS = {
	mobile: '768px',
	tablet: '1024px',
	desktop: '1200px'
} as const;

export const NAV_ITEMS = [
	{
		href: '/linktree',
		key: 'linktree',
		label: 'Linktree'
	},
	{
		href: '/about',
		key: 'about',
		label: 'Acerca de'
	}
] as const;

export const AUDIO_CONFIG = {
	src: '/mix-website_mezcla.mp3',
	type: 'audio/mpeg'
} as const;

export const SOCIAL_LINKS = [
	{
		platform: 'twitter',
		url: 'https://x.com/i/flow/login?redirect_after_login=%2Fcamr05',
		label: 'Twitter',
		color: '#1DA1F2'
	},
	{
		platform: 'github',
		url: 'https://github.com/CAMR05',
		label: 'GitHub',
		color: '#333'
	},
	{
		platform: 'youtube',
		url: 'https://youtube.com/@camo0502?si=9T2mlMnvD-h8ccDM',
		label: 'YouTube',
		color: '#FF0000'
	},
	{
		platform: 'apple',
		url: 'https://music.apple.com/profile/Litos0505',
		label: 'Apple Music',
		color: '#FB2D3F'
	}
] as const;
