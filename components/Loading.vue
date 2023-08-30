<template>
	<div class="loading">
		<div class="loading__img">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				style="margin: auto; shape-rendering: auto"
				width="24px"
				height="24px"
				viewBox="0 0 96 96"
				preserveAspectRatio="xMidYMid"
			>
				<circle
					r="40"
					cx="48"
					cy="48"
					fill="none"
					stroke-width="16"
					stroke-dasharray="192"
				>
					<animateTransform
						dur="1s"
						type="rotate"
						keyTimes="0;1"
						repeatCount="indefinite"
						attributeName="transform"
						values="0 48 48;360 48 48"
					/>
				</circle>
			</svg>
		</div>
	</div>
</template>

<style lang="sass">
.loading
	width: 100%
	height: 100%
	display: grid
	justify-content: center
	align-items: center
.loading__img
	width: 24px
	height: 24px
	svg
		width: 24px
		width: 24px
	circle
		stroke: #fff
.black
	circle
		stroke: #000
.white
	circle
		stroke: #fff
</style>
