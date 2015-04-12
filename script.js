(function() {
    try {
        //alert("This code will not fail. ")
        abert("this will fail")
    } catch (err) {
        alert("An error occured... ")
        alert(err.message)
    } finally {
        alert("Finally!!!")
    }


}());
