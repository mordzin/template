<template>
	<div
		class="draggable"
		:draggable="true"
		@dragenter.prevent="setHover(1)"
		@dragleave.prevent="setHover(-1)"
		@dragover.prevent="setHover(1)"
		@dragend.prevent="setHover(-1)"
		@dragexit.prevent="setHover(-1)"
		@dragstart="useMove(parent).from(position), setHover(-1)"
		@drop="useMove(parent).to(position), setHover(-1)"
	>
		<div
			class="drop__zone"
			:class="{ [`mb2`]: hover > 0 }"
			:style="{
				height: hover > 0 ? '100px' : '',
			}"
		/>
		<slot />
	</div>
</template>

<script setup>
// 👉 Props
const props = defineProps({ parent: Object, position: Number });

const hover = ref(null);

const setHover = (val) => {
	hover.value = 0;
	hover.value += val;
};
</script>

<style lang="sass" scoped>
.drop__zone
	height: 0
	border-radius: var(--3)
	background-color: var(--dark3)
</style>
