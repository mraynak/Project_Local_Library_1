function getTotalBooksCount(books) {
  let total = 0
  for (let i = 0; i < books.length; i++) {
    total++
  }
  return total 
}

function getTotalAccountsCount(accounts) {
  let total = 0
  for (let i = 0; i < accounts.length; i++) {
    total++
  }
  return total
}

function getBooksBorrowedCount(books) {
  let total = 0
  books.forEach((book) => {for (let i = 0; i < book.borrows.length; i++) {
    (book.borrows[i].returned === false ? total++ : total = total)
    }
  })
  return total                         
}

function getMostCommonGenres(books) {
  let genres = [];
  books.forEach((book) =>{
    const match = genres.find((genre) => genre.name === book.genre);
    if(match){
      match.count++;
    } else {
      const name = book.genre;
      genres.push({name, count:1});
    }
  });
  let result = genres.sort((genreA, genreB) => genreA.count < genreB.count ? 1: -1);
  return result.splice(0,5);
}

function getMostPopularBooks(books) {
  let result = []
  books.forEach((book) => {
    let common = {}
    common.name = book.title, 
    common.count = book.borrows.length
    result.push(common)
  })
  return sortAndSlice(result)
}

//helper function is here

function sortAndSlice(result) {
  return result.sort((amount1, amount2) => (amount2.count - amount1.count)).slice(0, 5)
}

function getMostPopularAuthors(books, authors) {
  return books.map(book => {
    const author = authors.find(author => author.id === book.authorId)
    return {
      name: `${author.name.first} ${author.name.last}`, 
      count: book.borrows.length
    }
  })
  .sort((amount1, amount2) => (amount2.count - amount1.count)).slice(0, 5)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
