<template>
	<div class="context">
		<Button :icon="`more_vert`" @click="toggle()" />

		<Card
			class="context__options dark style b4 p2"
			v-if="open"
			:class="$attrs.class ?? ``"
		>
			<List>
				<slot />
			</List>
		</Card>
	</div>
</template>

<script setup>
// 👉 Props
const props = defineProps({ actions: Array });

// ✨ Render
const { active: open, toggle } = useToggle(false);
</script>

<style lang="sass">
.context__options
	z-index: 2
	width: 280px
	min-width: fit-content
	position: absolute
</style>
