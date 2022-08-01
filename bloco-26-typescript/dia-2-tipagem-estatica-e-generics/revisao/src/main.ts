import read from 'readline-sync';
import connection from './models/connection';
import BookModel, { Book } from './models/Book';

const main = async () => {
  const bookModel = new BookModel(connection);
  
  const title = read.question('Digite o nome do livro: ');
  const price = read.questionFloat('Digite o preço do livro: ');
  const author = read.question('Digite o autor do livro: ');
  const isbn = read.question('Digite o isbn do livro: ');

  const newBook: Book = {title, price, author, isbn};

  const createdBook = await bookModel.create(newBook);
  console.log(createdBook);

  const books = await bookModel.getAll();
  console.log(books);
}

main();