<!-- created by Aaron Meche -->
<script>
	import { resolve } from '$app/paths'
	import { page } from '$app/state'
	import { db } from '$lib/data'
    import { onMount } from 'svelte';
</script>

<!--  -->

<input type="text" name="Search Bar" id="search_bar" placeholder="Search for something...">
<div class="buttons">
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<button on:click={() => window.location.reload()}><i class="fa-solid fa-arrow-rotate-right"></i> Reload</button>
</div>

<!--  -->

<style>
    #search_bar{
		padding: 0.25rem 1rem;
		margin: 0 0.5rem;
		background: var(--l1);
		outline: solid 1pt var(--l3);
		font-size: 10pt;
		border-radius: 100vh;
	}

	#search_bar:focus{
		background: var(--l2);
		outline-color: var(--l5);
	}

	.buttons{
		display: flex;
		align-items: center;
	}

	a, button{
		display: inline-flex;
		align-items: center;
		padding: 0.5rem 1.5rem;
		border-radius: 100vh;
		cursor: pointer;
	}

	a > i, button > i{
		margin-right: 0.25rem;
	}

	a:hover, button:hover{
		background: var(--l1);
		color: var(--accent);
		outline: solid 1pt var(--l4);
	}

	a.active{
		color: var(--accent);
	}
</style>