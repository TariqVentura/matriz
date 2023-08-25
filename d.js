document.addEventListener('DOMContentLoaded', function () {
    let array = [
        [3, 9, 8],
        [2, 5, 6],
        [1, 4, 7]
    ]

    // let array = [
    //     [2, 3, 9],
    //     [1, 5, 6],
    //     [4, 7, 8]
    // ]
    for (let index = 0; index < 1; index++) {
        
        
    }
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            let element = array[i][j]
            document.write(element + " ")
        }
        document.write("<BR/>")
    }

    document.writeln('</br>')

    let element

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            switch (i) {
                case 0:
                    if (j == 0) {
                        element = array[i + 1][j]
                    } else {
                        element = array[i][j - 1]
                    }
                    break;
                case 1:
                    if (j == 0) {
                        element = array[i + 1][j]
                    } else {
                        element = array[i][j]
                    }
                    break;
                case 2:
                    if (j == 2) {
                        element = array[i - 2][j]
                    } else {
                        element = array[i][j + 1]
                    } 
                    break;
            }
            document.write(element + " ")
        }
        document.write("<BR/>")
    }
})