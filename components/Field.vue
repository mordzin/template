<template>
	<div class="field field--text">
		<input
			:id="`${data.id}-${prop}`"
			:name="name"
			:type="type || 'text'"
			:placeholder="placeholder"
			v-model="data[prop]"
			:class="{ pt7: label, [$attrs.class]: true }"
			:autofocus="autofocus"
		/>
		<Icon :for="name" :icon="`search`" v-if="icon" />
		<label :for="name" v-if="label"> {{ label }} </label>
	</div>
</template>

<script setup>
// 👉 Props
const props = defineProps({
	data: Object,
	prop: String,
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
</script>
