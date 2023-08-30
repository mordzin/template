<template>
	<div class="avatar">
		<img v-bind="{ src, alt }" />
	</div>
</template>

<script setup lang="ts">
// 👉 Props
const props = defineProps<{ src: string; alt: string }>();
</script>

<style lang="sass" scoped>
.avatar
	width: 3.5rem
	height: 3.5rem
	img
		width: 100%
		height: 100%
		display: block
		overflow: hidden
		object-fit: cover
		border-radius: var(--9)
		object-position: 50% 50%
</style>
