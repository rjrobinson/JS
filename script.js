var Person = function(firstName, lastName) {
    this.firstName = firstName,
        this.lastName = lastName,
}

Person.prototype.getFullName = function() {
    alert(this.firstName + " " + this.lastName)
};

Person.prototype.greet = function(person) {
    if (person instanceof Person) {
        return "hello, " + person.getFullName();
    } else {
        return "Hello There!"
    };
};
var person = new Person("john", "doe"),
    person2 = new Person("jane", "doe");
