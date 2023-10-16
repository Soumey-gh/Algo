//Tri Insertion 

let T = [63, 100, 70]
function swap(array, index1, index2) {
    let temps = array[index1]
    array[index1] = array[index2]
    array[index2] = temps
}

// function insertionSort (tableau_a_trier) {
//     for ( let i  = 0 ; i <tableau_a_trier.length; i++) {
//         let j = i; 
//         while ( j > 0 && (tableau_a_trier[j-1] >  tableau_a_trier[j]) ) {
//             swap(tableau_a_trier, j, j-1 )
//             j = j - 1; 
//         }
//     }
//     return tableau_a_trier
// }

//     array = [...T];
//     console.log(insertionSort(T))


// Tri Selection 
let Tab = [70,25,50,2]

function select(selection) {
    
    for (i = 0 ; i < selection.length ; i++) {
        let min = i

        for (j = i + 1 ; j < selection.length ; j++)
            if (selection[j] < selection[min]) {
                min = j
            }

        swap(selection, min, i)
    }
    return selection
}
console.log(select(Tab))
