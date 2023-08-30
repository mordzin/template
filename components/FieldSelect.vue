<template>
	<div class="field field--select">
		<select
			:id="id"
			:name="name"
			:placeholder="placeholder"
			:class="{ pt7: label, [$attrs.class ?? ``]: true }"
			v-model="data[prop]"
			@change="setDataProps(data, prop, options)"
		>
			<option v-for="option in options" :key="option.value" v-bind="option" />
		</select>
		<label :for="id"> {{ label }} </label>
	</div>
</template>

<script setup>
// 👉 Props
const props = defineProps({
	data: Object,
	prop: String,
	id: String,
	type: String,
	name: String,
	icon: String,
	label: String,
	placeholder: String,
	autofocus: Boolean,
	pattern: String,
	readonly: Boolean,
	required: Boolean,
	checked: Boolean,
	options: Array,
});

// 🔥 Functions
const setDataProps = (data, prop, options) => {
	const option = options.find((o) => o.value == data[prop]);
	for (const key in option.data) data[key] = option.data[key];
};
</script>

<style lang="sass"></style>
