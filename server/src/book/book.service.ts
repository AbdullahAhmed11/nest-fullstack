import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './schemas/book.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class BookService {
    constructor(
        @InjectModel(Book.name)
        private bookModel: mongoose.Model<Book>,
    ){}


    async finAll(): Promise<Book[]> {
        const books = await this.bookModel.find();
        return books;
    }

    async create(book: Book) : Promise<Book> {
        const res = await this.bookModel.create(book);
        return res;
    }
    
    async findById(id: string) : Promise<Book> {
        const book = await this.bookModel.findById(id);
        if (!book) {
            throw new Error(`Book with id ${id} not found`);
        }
        return book;
    } 

        
    async updateById(id: string, book: Book) : Promise<Book> {

       const updatedBook = await this.bookModel.findByIdAndUpdate(id, book, {
            new: true,
            runValidators: true,
        });
        if (!updatedBook) {
            throw new Error(`Book with id ${id} not found`);
        }
        return updatedBook;
    } 

      async deleteById(id: string) : Promise<Book> {

       const deletedBook = await this.bookModel.findByIdAndDelete(id,);
        if (!deletedBook) {
            throw new Error(`Book with id ${id} not found`);
        }
        return deletedBook;
    } 
}
