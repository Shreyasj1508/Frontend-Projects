async function bubble() {
    console.log('In bubble()');
    const ele = document.querySelectorAll(".bar");
    for (let i = 0; i < ele.length - 1; i++) {
        console.log('In ith loop');
        for (let j = 0; j < ele.length - 1 - i; j++) {
            console.log('In jth loop');
            ele[j].style.background = 'blue';
            ele[j + 1].style.background = 'blue';

            if (parseInt(ele[j].style.height) > parseInt(ele[j + 1].style.height)) {
                console.log('In if condition');
                await waitforme(delay); // Wait before swapping
                swap(ele[j], ele[j + 1]); // Swap the bars
            }

            // Reset colors after comparison
            ele[j].style.background = 'cyan';
            ele[j + 1].style.background = 'cyan';
        }
        // Mark the last sorted element
        ele[ele.length - 1 - i].style.background = 'green';
    }
    // Final mark for the first element
    ele[0].style.background = 'green';
}

// Adding event listener to the bubble sort button
const bubSortbtn = document.querySelector(".bubbleSort");
bubSortbtn.addEventListener('click', async function () {
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await bubble(); // Run the bubble sort
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});
