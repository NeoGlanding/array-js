// 1
function count(arr) {
    for (let i = 0;i<arr.length;i++) {
        if (typeof arr[i] !== 'number') {
            return 'Error, tipe data harus berupa number'
        } else {
            let count = 0;
            for (let i = 0;i<arr.length;i++) {
                count += arr[i];
            }
            return count;
        }
    }
} 

// 2
function reverse(arr) {
    for (let i = 0;i<arr.length;i++) {
        if (typeof arr[i] !== 'number') {
            return 'Error, tipe data harus number'
        }
    }
    let array = [];
    for (let i = 0; i<arr.length;i++) {
        let arrString = arr[i].toString();
        // console.log(typeof arrString);
        let reverseArray = ''
        for(let j=arrString.length - 1; j>= 0; j--) {
            reverseArray += arrString[j];
        }
        array.unshift(reverseArray * 1)
    }
    return array;
}

// console.log(reverse([12,23,34, 'Ihsan']))

// 3
// function unique(arr) {
//     let array = [arr[0]];
//     for(let i = 0;i<arr.length;i++) {
//         for(let j=0;j<array.length;j++) {
//             console.log(arr[i], arr[j])
//             if (arr[i] !== array[j]) {
//                 array.push(arr[j]);
//             }
//         }
//     }
//     console.log(array)
// }


// 4
// function jajanBoba(uang) {
//     const listBoba = [
//         ['Xing Fu Tang', 38000], 
//         ['OneZo', 53500],
//         ['KOI The', 36000],
//         ['Chatime', 25000],
//         ['Kokumi', 42000],
//         ['Bubble Station Milk', 13000]
//     ]
//     for(let i =0;i<listBoba.length;i++) {
//         for(let j = 0;j<listBoba[i].length;j++) {
//             if(uang - listBoba)
//         }
//     }
// }