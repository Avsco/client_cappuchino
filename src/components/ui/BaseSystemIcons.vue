<template>
	<svg
		v-if="icon == 'facebook'"
		aria-hidden="true"
		focusable="false"
		data-prefix="fab"
		data-icon="facebook"
		class="svg-inline--fa fa-facebook fa-w-16"
		role="img"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 512 512"
		:height="height"
		:style="styles"
	>
		<path
			fill="currentColor"
			d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
		/>
	</svg>
	<svg
		v-else-if="icon == 'instagram'"
		aria-hidden="true"
		focusable="false"
		data-prefix="fab"
		data-icon="instagram"
		class="svg-inline--fa fa-instagram fa-w-14"
		role="img"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 448 512"
		:height="height"
		:style="styles"
	>
		<path
			fill="currentColor"
			d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
		/>
	</svg>
	<svg
		v-else-if="icon == 'twitter'"
		aria-hidden="true"
		focusable="false"
		data-prefix="fab"
		data-icon="twitter"
		class="svg-inline--fa fa-twitter fa-w-16"
		role="img"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 512 512"
		:height="height"
		:style="styles"
	>
		<path
			fill="currentColor"
			d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
		/>
	</svg>
	<svg
		v-else-if="icon == 'youtube'"
		aria-hidden="true"
		focusable="false"
		data-prefix="fab"
		data-icon="youtube"
		class="svg-inline--fa fa-youtube fa-w-18"
		role="img"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 576 512"
		:height="height"
		:style="styles"
	>
		<path
			fill="currentColor"
			d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
		/>
	</svg>
	<svg
		v-else-if="icon == 'github'"
		aria-hidden="true"
		focusable="false"
		data-prefix="fab"
		data-icon="github"
		class="svg-inline--fa fa-github fa-w-16"
		role="img"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 496 512"
		:height="height"
		:style="styles"
	>
		<path
			fill="currentColor"
			d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
		/>
	</svg>
	<svg
		v-else-if="icon == 'search'"
		aria-hidden="true"
		focusable="false"
		data-prefix="fas"
		data-icon="search"
		class="svg-inline--fa fa-search fa-w-16"
		role="img"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 512 512"
		:height="height"
		:style="styles"
	>
		<path
			fill="currentColor"
			d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
		/>
	</svg>
	<svg
		v-else-if="icon == 'bell'"
		aria-hidden="true"
		focusable="false"
		data-prefix="fas"
		data-icon="bell"
		class="svg-inline--fa fa-bell fa-w-14"
		role="img"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 448 512"
		:height="height"
		:style="styles"
	>
		<path
			fill="currentColor"
			d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"
		/>
	</svg>
	<svg
		v-else-if="icon == 'calendar'"
		aria-hidden="true"
		focusable="false"
		data-prefix="fas"
		data-icon="calendar-day"
		class="svg-inline--fa fa-calendar-day fa-w-14"
		role="img"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 448 512"
		:height="height"
		:style="styles"
	>
		<path
			fill="currentColor"
			d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-96zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
		></path>
	</svg>
	<svg
		v-else-if="icon == 'angle'"
		aria-hidden="true"
		focusable="false"
		data-prefix="fas"
		data-icon="angle-up"
		class="svg-inline--fa fa-angle-up fa-w-10"
		role="img"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 320 512"
		:height="height"
		:style="styles"
	>
		<path
			fill="currentColor"
			d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"
		></path>
	</svg>
	<svg
		v-else-if="icon == 'close'"
		aria-hidden="true"
		focusable="false"
		data-prefix="fas"
		data-icon="times"
		class="svg-inline--fa fa-times fa-w-11"
		role="img"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 352 512"
		:height="height"
		:style="styles"
	>
		<path
			fill="currentColor"
			d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
		/>
	</svg>
	<svg
		v-else-if="icon == 'bars'"
		aria-hidden="true"
		focusable="false"
		data-prefix="fas"
		data-icon="bars"
		class="svg-inline--fa fa-bars fa-w-14"
		role="img"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 448 512"
		:height="height"
		:style="styles"
	>
		<path
			fill="currentColor"
			d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
		/>
	</svg>
	<svg
		v-else-if="icon == 'toggle-theme'"
		aria-hidden="true"
		focusable="false"
		data-prefix="fas"
		data-icon="adjust"
		class="svg-inline--fa fa-adjust fa-w-16"
		role="img"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 512 512"
		:height="height"
		:style="styles"
	>
		<path
			fill="currentColor"
			d="M8 256c0 136.966 111.033 248 248 248s248-111.034 248-248S392.966 8 256 8 8 119.033 8 256zm248 184V72c101.705 0 184 82.311 184 184 0 101.705-82.311 184-184 184z"
		/>
	</svg>
	<svg
		v-else-if="icon == 'camera'"
		aria-hidden="true"
		focusable="false"
		data-prefix="fas"
		data-icon="camera"
		class="svg-inline--fa fa-camera fa-w-16"
		role="img"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 512 512"
		:height="height"
		:style="styles"
	>
		<path
			fill="currentColor"
			d="M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"
		/>
	</svg>
	<svg
		v-else-if="icon == 'trash'"
		aria-hidden="true"
		focusable="false"
		data-prefix="fas"
		data-icon="trash"
		class="svg-inline--fa fa-trash fa-w-14"
		role="img"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 448 512"
		:height="height"
		:style="styles"
	>
		<path
			fill="currentColor"
			d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"
		/>
	</svg>
	<svg
		v-else-if="icon == 'home'"
		aria-hidden="true"
		focusable="false"
		data-prefix="fas"
		data-icon="home"
		class="svg-inline--fa fa-home fa-w-18"
		role="img"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 576 512"
		:height="height"
		:style="styles"
	>
		<path
			fill="currentColor"
			d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
		/>
	</svg>
	<svg
		v-else-if="icon == 'bookmark'"
		aria-hidden="true"
		focusable="false"
		data-prefix="fas"
		data-icon="bookmark"
		class="svg-inline--fa fa-bookmark fa-w-12"
		role="img"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 384 512"
		:height="height"
		:style="styles"
	>
		<path
			fill="currentColor"
			d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z"
		/>
	</svg>
</template>

<script setup lang="ts">
	import { ref } from "vue";

	const props = defineProps({
		icon: {
			default: "",
			type: String,
		},
		height: {
			type: String,
			default: "24",
		},
		rotate: {
			type: Number,
			default: 0,
		},
	});

	let styles = ref(`transform: rotate(${props.rotate}deg);`);
</script>

<style lang="scss" scoped>
	span {
		height: 100%;
	}
</style>
