module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#535bf2',
				secondary: '#1a1a1a',
				hover: '#535bf2'
			},
			keyframes: {
				push: {
					'0%': { transform: 'translateY(-200px)', opacity: 1 },
					'50%': { transform: 'translateY(0)', opacity: 1 },
					'100%': { transform: 'translateY(-200px)', opacity: 0 }
				}
			},
			animation: {
				push: 'push 3s ease-in-out'
			},
			top: {
				over: '-100px;'
			}
		}
	},
	plugins: []
}
