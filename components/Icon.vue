<template>
	<Loading v-if="loading" />
	<i :class="isEmoji(icon) ? `emoji` : `material-icons-outlined`" v-else>
		{{ icon }}
	</i>
</template>

<script setup>
// 👉 Props
const props = defineProps({
	icon: {
		type: String,
		default: `arrow_forward`,
	},
	loading: {
		type: Boolean,
		default: false,
	},
});
</script>

<style lang="sass"></style>
