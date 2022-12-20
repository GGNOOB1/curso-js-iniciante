function showStarts(rows) {

    for (let row = 1; row <= rows; row++) {
        let list = '';
        for (let i = 0; i < row; i++)
            list += '*';
        console.log(list);

    }

}

showStarts(5);