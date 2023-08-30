<template>
	<button class="hover">
		<p v-if="name">{{ name }}</p>
		<Icon v-bind="{ icon, loading }" v-if="icon" />
		<Tooltip v-bind="{ tooltip }" v-if="tooltip" />
	</button>
</template>

<script setup>
const props = defineProps({
	name: String | Number,
	icon: String,
	tooltip: String,
	loading: Boolean,
});
</script>

<style lang="sass" scoped></style>
