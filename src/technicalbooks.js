class Book {
    constructor(title, author, ISBN, numCopies) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.numCopies = numCopies;
    }
    get availability () {
        return this.getAvailability();
    }

    getAvailability(){
        if (this.numCopies === 0) {
            return "Out of stock";
        } else if (this.numCopies <10) {
            return "Low in stock";
        }
        return "In stock";
    }

    sell(numCopiesSold =1) {
        this.numCopies -= numCopiesSold;
    }

    restock (numCopiesStockked = 5) {
        this.numCopies += numCopiesStockked;
    }
}

class TechnicalBook extends Book {
    constructor(title, author, ISBN, numCopies, edition) {
        super(title, author, ISBN, numCopies);
        this.edition = edition;
    }

    getEdition(){
        return `The current version of this book is ${this.edition} `;
    
    }
}

const GossipGirl = new Book ("Gossip Girl", "Cecily von Ziegesar", 123456, 5);
console.log(GossipGirl.availability);
GossipGirl.restock(12);
console.log(GossipGirl.availability);
GossipGirl.sell(17);
console.log(GossipGirl.availability);

const CrackingTheCodingInterview = new TechnicalBook(
    "Cracking The Coding Interview",
    "Gayle Laackmann McDowell",
    1209123,
    7,
    "2.3"
  );
  console.log(CrackingTheCodingInterview.availability);
  console.log(CrackingTheCodingInterview.getEdition());