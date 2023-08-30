<template>
	<div class="cover">
		<div class="p1">
			<div class="b4 ofh">
				<Image :src="data.image" />

				<div class="wflow absolute bottom p3 pt12 z1 bgg-tb">
					<Text class="mb1">
						<h3>{{ data.name }}</h3>
						<p>{{ data.desc }}</p>
					</Text>
					<grid class="gtc--a-1 g1 gaic">
						<p class="chip accent fwb">R$ {{ data.pricePromotional }}</p>
						<p style="text-decoration: line-through" class="pl1">
							R$ {{ data.priceOriginal }}
						</p>
					</grid>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
// 👉 Props
const { data } = defineProps<{ data?: any }>();
</script>

<style lang="sass" scoped>
.cover .image
	height: 60vh
</style>
