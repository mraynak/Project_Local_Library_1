function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => (accountA.name.last.toLowerCase() < accountB.name.last.toLowerCase() ? -1 : 1))
}

function getTotalNumberOfBorrows(account, books) {
  let total = 0
    books.forEach((book) => {
      for (let i = 0; i < book.borrows.length; i++) {
       (book.borrows[i].id === account.id ? total++ : total = total)
      }})
    return total
  }

// reduce function is here ended up needing a for/in loop but had already written the reduce also for this function 


// function getTotalNumberOfBorrows(account, books) {
//   return books.reduce((total, book) => {
//     total += book.borrows.filter((borrow) => {
//       return borrow.id === account.id
//     }).length 
//     return total
//   },0)
// }


  function getBooksPossessedByAccount(account, books, authors) {
    let howMany = books.filter((book) => book.borrows.find((match) => match.returned === false && match.id === account.id))
    howMany.map((order) => {order.author = authors.find((same) => same.id === order.authorId)})
    return howMany
  }

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
