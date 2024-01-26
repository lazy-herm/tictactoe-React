export const checkWin = (positions, setState) => {
    const winCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    // For each winning combination check number of matching indeces with the players postions.
    winCombinations.forEach((winingCombo) => {
        let occurance = 0;
        // Count number of matching indeces.
        winingCombo.forEach((winingPosition) => {
            if (positions.includes(winingPosition)) {
                occurance++;
            }
        });
        // If 3 matching indeces then player has won.
        if (occurance === 3) {
            setState((prev) => { return { ...prev, buttonShow: true } });
            return;
        }
    })

}