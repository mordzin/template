<template>
	<button class="button button--vertical">
		<Icon v-bind="{ icon, loading }" v-if="icon" />
		<p v-if="name" class="fs7 fwb">{{ name }}</p>
		<Tooltip v-bind="{ tooltip }" v-if="tooltip" />
	</button>
</template>

<script setup>
const props = defineProps({
	name: String,
	icon: String,
	tooltip: String,
	loading: Boolean,
});
</script>

<style lang="sass" scoped>
.button--vertical
	display: grid
	gap: calc(var(--1) / 2)
	justify-items: center
	grid-template-columns: 1fr
	grid-template-rows: auto auto
	padding: var(--2)
</style>
