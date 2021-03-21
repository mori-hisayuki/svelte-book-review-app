import { BookRepository, BookRepositoryImp } from './book'

export type Repositories = {
    ['book']: BookRepository
}

export default {
    ['book']: new BookRepositoryImp()
} as Repositories