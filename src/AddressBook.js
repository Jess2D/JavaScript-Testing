function AdressBook(){
    this.contacts = [];
}

AdressBook.prototype.addContact = function(contact){
    this.contacts.push(contact);
}

AdressBook.prototype.getContact = function(index){
    return this.contacts[index];
  
}