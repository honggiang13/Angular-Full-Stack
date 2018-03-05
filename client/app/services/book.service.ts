import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Book } from '../shared/models/book.model';

@Injectable()
export class BookService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('/api/books');
  }

  countBooks(): Observable<number> {
    return this.http.get<number>('/api/books/count');
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>('/api/book', book);
  }

  getBook(book: Book): Observable<Book> {
    return this.http.get<Book>(`/api/book/${book._id}`);
  }

  editBook(book: Book): Observable<string> {
    return this.http.put(`/api/book/${book._id}`, book, { responseType: 'text' });
  }

  deleteBook(book: Book): Observable<string> {
    return this.http.delete(`/api/book/${book._id}`, { responseType: 'text' });
  }

}
