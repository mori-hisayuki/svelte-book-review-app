
import { httpClient } from '../httpClient'
import type { BookRepository } from './bookRepository'
import type { Book, QueryParams, Response } from './types'

export class BookRepositoryImp implements BookRepository {

    query = async (params: QueryParams): Promise<Response> => (await httpClient.get<Response>('/', { params: { q: params.query, startIndex: params.startIndex } })).data

    findById = async (id: string): Promise<Book> => (await httpClient.get<Book>(`/${id}`)).data
}