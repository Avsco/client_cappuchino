<template>
	<ReloadPWA />
	<router-view />
</template>

<script setup lang="ts">
	import { useTheme } from "./composables/ui/useTheme";
	import ReloadPWA from "./components/ReloadPWA.vue";

	useTheme();
</script>

<style lang="scss">
	@import "./scss/index.scss";
</style>
