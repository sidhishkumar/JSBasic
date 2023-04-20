
function buildFunction() {
    var arr = []
    for (var index = 0; index < 3; index++) {

        arr.push(
            function () {
                console.log(index)
            }
        )
    }
    return arr;
}

var build = buildFunction()
build[0]()
build[1]()
build[2]()

console.log('---------------- With Let ------------------------')

function buildFunction2() {

    var arr = []
    for (var index = 0; index < 3; index++) {
        let i = index
        arr.push(
            function () {
                console.log(i)
            }
        )
    }
    return arr;
}

var build2 = buildFunction2()
build2[0]()
build2[1]()
build2[2]()


console.log('---------------- With Out Let ------------------------')

function buildFunction3() {
    var arr = []
    for (var index = 0; index < 3; index++) {
        arr.push(
            (function() {
                return function () {
                    console.log(index)
                }
            }(index))
        )
    }
    return arr;
}

var build3 = buildFunction2()
build3[0]()
build3[1]()
build3[2]() 