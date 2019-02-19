describe("Adress Book", function() {
    var adressBook, 
        thisContact;

    beforeEach(function () {
        adressBook = new AdressBook();
        thisContact = new Contact();
    

    });

    it("should be able to add a contact", function() {
    
      adressBook.addContact(thisContact);
      expect(adressBook.getContact(0)).toBe(thisContact);
    });

    it("should be able to delete a contact", function() {
       
        adressBook.addContact(thisContact);
        adressBook.deleteContact(0);
        expect(adressBook.getContact(0)).not.toBeDefined();
      });

  });