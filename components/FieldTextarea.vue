<template>
	<div class="field field--textarea">
		<textarea
			v-model="data[prop]"
			:id="id"
			:name="name"
			:placeholder="placeholder"
			:autofocus="autofocus"
			:class="{ pt7: label, [$attrs.class]: true }"
			@click="onClick"
			@focus="onFocus"
			@blur="onBlur"
			@input="fitToScrollHeight($event)"
		/>
		<label :for="id" v-if="label">{{ label }} </label>
	</div>
</template>

<script setup>
// 👉 Props
const props = defineProps({
	data: Object,
	id: String,
	name: String,
	type: String,
	prop: String,
	label: String,
	placeholder: String,
	autofocus: Boolean,
	onClick: Function,
	onFocus: Function,
	onBlur: Function,
});

onMounted(() => fitToScrollHeight({ target: getElementById(props.id) }));
</script>
