<template>
	<div class="overlay" />
</template>

<script setup></script>

<style lang="sass" scoped>

.overlay
	z-index: 2
	width: 100vw
	height: 100vh
	inset: 0 0 0 0
	position: fixed
	cursor: pointer
	backdrop-filter: blur(3px)
	background-color: rgba(0, 0, 0, 0.33)
</style>
