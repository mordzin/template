<template>
	<div v-if="tooltip" class="tooltip">
		<p>
			{{ tooltip }}
		</p>
	</div>
</template>

<script setup>
// 👉 Props
const props = defineProps({ tooltip: String });
</script>

<style lang="sass">
.tooltip
	width: 0
	left: 50%
	z-index: 2
	position: absolute
	p
		opacity: 0
		line-height: 1
		font-size: 0rem
		padding: var(--2)
		width: max-content
		white-space: nowrap
		filter: blur(var(--3))
		border-radius: var(--2)
		mix-blend-mode: overlay
		background-color: var(--dark1)

button:hover .tooltip
	left: 100%
	padding-left: var(--1)
	p
		opacity: 1
		display: block
		font-size: 1rem
		filter: blur(0)
</style>
