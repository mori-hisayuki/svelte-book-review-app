export type Response = {
    items: Book[]
    kind: string
    totalItems: number
}

export type Book = {
    id: string
    volumeInfo: {
        title: string
        authors?: string[]
        publishDate?: string
        description?: string
        publisher?: string
        imageLinks?: {
            smallThumbnail: string
            thumbnail: string
        },
        pageCount: number
        previewLink?: string
    }
    saleInfo: {
        listPrice: {
            amount: number
        }
    }
}

export type QueryParams = {
    query: string
    startIndex?: number
}