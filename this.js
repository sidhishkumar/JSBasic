
function a() {
    console.log(this)
}

a()

var b = function () {
    console.log(this)
}

b();

// ***********************

var c = {
    name: 'The C object',
    d: {
        log: function () {
            console.log(this)
        }
    }

}

c.d.log();