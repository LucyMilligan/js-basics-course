// show stars takes a number and shows stars corresponding to row number

showStars(3);

function showStars(rows) {
    for (let row = 1; row <= rows; row++) {
        let stars = '';
        for (let j = 1; j <= row; j++)
            stars += '*';
        console.log(stars);
    }
}