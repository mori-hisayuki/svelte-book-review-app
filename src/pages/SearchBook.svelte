<script lang='ts'>
    import SearchBar from '../components/SearchBar.svelte'
    import RepositoryFactory from '../repositories/repositoryFactory'

    const bookRepository = RepositoryFactory['book']
    let query = ''

    const handleSubmit = async () => {
        if(!)
        console.log('handleSubmit')
        console.log(query)
        const response = await bookRepository.query({ query })
        console.log(response)
    }
</script>
<form on:submit|preventDefault={handleSubmit}>
    <SearchBar bind:value={query} />
</form>

<div class='text-center mt-4'>
    { query }
</div>