<script lang='ts'>
    import type { Book } from '../repositories/book/types'
    export let book: Book

    //$:ラベルが付与された式や文は、変数の更新のたびに再計算される
    $: src = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : 'http://placehold.jp/eeeeee/cccccc/160x120.png?text=No%20Image'

    $: description = book.volumeInfo.description ? `${book.volumeInfo.description.slice(0, 100)}...` : ''
</script>
<div class='w-full sm:flex'>
    <div class='h-96 sm:h-auto sm:w-48 flex-none bg-cover rounded-t smLrounded-t-none sm:rounded-l text-center overflow-hidden' style={`background-image: url('${src}')`}></div>
    <div class='border-r border-b border-l border-gray-light sm:border-l-0 sm:border-t sm:border-gray-light bg-white rounded-b sm:rounded-b-none sm:rounded-r p-4 flex flex-col justify-between leading-normal w-100 sm:w-9/12 lg:w-7/12'>
        <div class='my-4'>
            <div class='text-black font-bold text-xl mb-2'>{book.volumeInfo.title}</div>
            <p class='text-gray-darker text-sm break-words w-9/12 m-auto'>{description}</p>
        </div>
    </div>
</div>