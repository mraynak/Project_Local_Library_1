function findAuthorById(authors, id) {
  return authors.find((name) => name.id === id)
}

function findBookById(books, id) {
  return books.find((iden) => iden.id === id)
}

function partitionBooksByBorrowedStatus(books) {
    const loaned = books.filter((book) => !book.borrows[0].returned)
    const notLoaned = books.filter((book) => book.borrows[0].returned)
    return [loaned, notLoaned]
  }

/*
function partitionBooksByBorrowedStatus(books) {
  let loaned = []
  let notLoaned = []
  let outIn = books.forEach((book) => {book.borrows.every((back) => {back.returned === true})
  (outIn === true ? notLoaned.push(book) : loaned.push(book))})
  return [loaned, notLoaned]
}
*/

function getBorrowersForBook(book, accounts){
  let borrowers = []
  accounts.map((iden) => {
    book.borrows.find((match) => {if (match.id === iden.id) {
      iden["returned"] = match.returned
      borrowers.push(iden)
    }})
  })
  return borrowers.splice(0,10)
}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
