describe("Adress Book", function() {
    it("should be able to add a contact", function() {
      var adressBook = new AdressBook();
      thisContact = new Contact();
      adressBook.addContact(thisContact);
      expect(adressBook.getContact(0)).toBe(thisContact);
    });

    it("should be able to delete a contact", function() {
        var adressBook = new AdressBook();
        thisContact = new Contact();
        adressBook.addContact(thisContact);
        adressBook.deleteContact(0);
        expect(adressBook.getContact(0)).not.toBeDefined();
      });

  });