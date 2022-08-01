import read from 'readline-sync';
import connection from './models/connection';
import { ResultSetHeader } from 'mysql2';

const main = async () => {
  const title = read.question('Digite o nome do livro: ');
  const price = read.question('Digite o preço do livro: ');
  const author = read.question('Digite o autor do livro: ');
  const isbn = read.question('Digite o isbn do livro: ');

  const result = await connection.execute<ResultSetHeader>(
    'INSERT INTO books (title, price, author, isbn) VALUES (?, ?, ?, ?)',
    [title, price, author, isbn]
  );

  const [dataInserted] = result;
  const { insertId } = dataInserted;
  console.log(insertId);
}

main();