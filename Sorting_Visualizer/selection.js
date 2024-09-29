async function selection() {
    console.log('In selection()');
    const ele = document.querySelectorAll(".bar");
    for (let i = 0; i < ele.length; i++) {
        console.log('In ith loop');
        let min_index = i;
        
        // Change color of the current position
        ele[i].style.background = 'blue';
        
        for (let j = i + 1; j < ele.length; j++) {
            console.log('In jth loop');
            // Change color for the current comparison
            ele[j].style.background = 'red';

            await waitforme(delay); // Wait before checking

            if (parseInt(ele[j].style.height) < parseInt(ele[min_index].style.height)) {
                console.log('In if condition height comparison');
                if (min_index !== i) {
                    // Previous min_index color back to normal
                    ele[min_index].style.background = 'cyan';
                }
                min_index = j; // Update min_index
            } else {
                // Reset color for current element if not minimum
                ele[j].style.background = 'cyan';
            }
        }

        // After finding the minimum, swap it with the first element in the unsorted part
        await waitforme(delay); // Optional wait before swapping
        swap(ele[min_index], ele[i]);

        // Reset the color of the sorted element
        ele[min_index].style.background = 'cyan'; // Optional if it's already cyan
        ele[i].style.background = 'green'; // Mark the sorted element as green
    }
}

// Adding event listener to the selection sort button
const selectionSortbtn = document.querySelector(".selectionSort");
selectionSortbtn.addEventListener('click', async function () {
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await selection(); // Run the selection sort
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});
