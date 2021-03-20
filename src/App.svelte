<script lang="ts">
	export let name: string;
	import TailWindCSS from './Tailwindcss.svelte'
	import Header from './components/Header.svelte'
</script>

<TailWindCSS />
<Header />
<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>