<script lang='ts'>
    import SearchBar from '../components/SearchBar.svelte'
    import Spinner from '../components/Spinner.svelte'
    import BookCard from '../components/BookCard.svelte'
    import RepositoryFactory from '../repositories/repositoryFactory'
    import type { Book } from '../repositories/book/types'

    const bookRepository = RepositoryFactory['book']
    let query = ''
    let books: Book[] = []
    let promise: Promise<void>


    const handleSubmit = async () => {
        if(!query.trim()) return
        promise = getBook()
    }

    const getBook = async () => {
        books = (await bookRepository.query({ query })).items
    }

</script>
<form on:submit|preventDefault={handleSubmit}>
    <SearchBar bind:value={query} />
</form>

<div class='text-center mt-4'>
    {#if !books}
        <div>検索結果が見つかりませんでした</div>
    {:else}
    <div class='grid grid-cols-1 gap-2 lg:grid-cols-2'>
        {#each books as book (book.id)}
            <BookCard {book} />
        {/each}
    </div>
    {/if}
    {#await promise}
        <div class='flex justify-center'>
            <Spinner />
        </div>
        {:catch e}
        <span class='text-red-600 text-sm'>
            {e.message}
        </span>
    {/await}

</div>