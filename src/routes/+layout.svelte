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

	onMount(() => {
		
	})


</script>

<svelte:head>
	<title>LSU Steam App</title>
	<link rel="icon" href={favicon} />
	<script src="https://kit.fontawesome.com/5cf062dc93.js" crossorigin="anonymous"></script>
</svelte:head>


<div class="content">
	{@render children()}
</div>

<style>
	
</style>