function time() {
    for(let i =0; i< 100000; i++){
        //
    }
}


const measureTime = () => {
    console.time('Something'); // time takes labels as argument
    time();
    // console.timeEnd('Somethin'); // (node:8409) Warning: No such label 'Somethin' for console.timeEnd()
    console.timeEnd('Something');
}

measureTime(); // time() 6.198s
    