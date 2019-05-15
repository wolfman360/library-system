var Admin = require('./../modules/admin.js');
var User = require('./user.js');
const bookpriorityDatabase = require('./../database/database.js').booksPriorityDatabase;
bash = new Admin('mark bashir');
zinachi = new User('zinachi victor', 'junior student');
enigma = new User('zinachi victor', 'teacher');
zinachi2 = new User('zinachi victor', 'senior student');
choya = new User('choya victor', 'senior student')
bash.addBook('The Lost Symbol', 'sci-fi', 'Dan Brown');

zinachi.requestBook('The Lost Symbol', 'Dan Brown');
zinachi2.requestBook('The Lost Symbol', 'Dan Brown');
choya.requestBook('The Lost Symbol', 'Dan Brown');
console.log(bookpriorityDatabase);
console.log(bash.handleRequest());
console.log(zinachi2.viewRequest());
