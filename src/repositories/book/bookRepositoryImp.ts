
import { httpClient } from '../httpClient'
import { BookRepository } from './bookRepository'
import { Book, QueryParams, Response } from './types'

export class BookRepositoryImp implements BookRepository {

    query = async (params: QueryParams): Promise<Response> => (await httpClient.get<Response>('/', { params })).data

    findById = async (id: string): Promise<Book> => (await httpClient.get<Book>(`/${id}`)).data
}