import type { Book, QueryParams, Response } from './types'

export interface BookRepository {
    query(params: QueryParams): Promise<Response>
    findById(id: string): Promise<Book>
}