<script>
	import '$lib/main.css';
	import favicon from '$lib/assets/icon.png';
	import TopNavbar from '$lib/components/TopNavbar.svelte';
	import LeftNavbar from '$lib/components/LeftNavbar.svelte';
	import { resolve } from '$app/paths';
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import { db } from '$lib/data'
	let { children } = $props();


</script>

<svelte:head>
	<title>LSU Steam App</title>
	<link rel="icon" href={favicon} />
	<script src="https://kit.fontawesome.com/5cf062dc93.js" crossorigin="anonymous"></script>
</svelte:head>

<div class="page-line">
	<div class="navstack">
		<LeftNavbar />
	</div>

	<div class="page-stack">
		<div class="navbar">
			<TopNavbar />
		</div>
		<div class="content">
			{@render children()}
		</div>
	</div>
</div>

<style>
	.page-line{
		height: 100vh;
		display: grid;
		grid-template-columns: min-content auto;
	}

	.navstack{
		height: 100%;
		width: 22rem;
		border-right: solid 1pt var(--l3);
	}
	
	.navbar{
		display: grid;
		grid-template-columns: 1fr min-content;
		padding: 1rem;
		border-bottom: solid 1pt var(--l3);
	}

	.page-stack{
		display: grid;
		grid-template-rows: min-content 1fr;
		height: 100%;
		overflow: auto;
	}

	.content{
		height: 100%;
		width: 100%;
		overflow-y: auto;
		background: linear-gradient(to top right, var(--l05), transparent);
	}
</style>