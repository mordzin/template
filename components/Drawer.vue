<template>
	<div class="drawer ofh p2 grid gaic jcc">
		<Overlay @click="toggleDrawer(() => $emit(`close`))" />
		<div class="drawer__content wfit" :class="{ active: active }">
			<slot />
		</div>
	</div>
</template>

<script setup>
const { active, toggle } = useToggle(false);

const toggleDrawer = (emit) => {
	setTimeout(() => toggle());
	if (active.value) setTimeout(() => emit(), 200);
};

toggleDrawer();
</script>

<style lang="sass" scoped>
.drawer
	inset: 0
	z-index: 3
	position: fixed
	&__content
		z-index: 5
		// float: right
		height: 100%
		transform: translateY(10%) scale(97%)
		opacity: 0
	.active
		transform: translateY(0) scale(100%)
		opacity: 1
</style>
