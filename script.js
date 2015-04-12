var createPerson = function(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName,
        sayHi: function() {
            return "Hi there"
        }
    }
};


john = createPerson("John", "Doe")
