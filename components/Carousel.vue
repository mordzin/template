<template>
	<div class="carousel">
		<slot />
	</div>
</template>

<script setup></script>

<style lang="sass">
.carousel
	width: 100%
	max-width: 100vw
	overflow: scroll
	white-space: nowrap
	scroll-padding: var(--2)
	scroll-snap-type: x mandatory
	> *
		float: none
		white-space: normal
		vertical-align: top
		display: inline-block
		scroll-snap-align: start
		scroll-snap-stop: always
	> *:not(:last-child)
		margin-right: var(--2)
</style>
