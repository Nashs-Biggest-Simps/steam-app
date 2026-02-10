<!-- created by Aaron Meche -->
<script>
    import { resolve } from '$app/paths';
    import { db } from '$lib/data'

	function formatNumber(num) {
        if (!num) return 0
        return num.toLocaleString('en-US')
    }

	

</script>

<!--  -->

<a href={resolve("/app")} class="logo">steam app</a>

<!--  -->

<style>
    .logo{
		padding: 2rem;
		font-size: 24pt;
		font-weight: 600;
		cursor: pointer;
	}

	.logo i { margin-right: 0.5rem; }
</style>