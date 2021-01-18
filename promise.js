

// async function add() {
//     let a = await new Promise((resolve, reject) => {
//         resolve(3)
//     })
//     console.log(a);
// }

// // add()

// let p = new Promise((resolve, reject) => {
//     console.log(123);
//     resolve(true)
//     reject(false)
//     console.log(456);
// })

// p.then(val => console.log(val))
//     .then(val => console.log(val))

// p.then(() => console.log('first'))
//     .then(() => console.log('second'))
//     .then(() => console.log('three'))

// .then(val => {
//     console.log(val);
//     val = 2
//     return val
// }).then(val => {
//     console.log(val);
// })


class CancelToken {
    constructor (cancelFn) {
        this.promise = new Promise((resolve, reject) => {
            cancelFn(() => {
                setTimeout(console.log, 0, "delay cancelled");
                resolve();
            });
        });
    }
}


// const startButton = document.querySelector('#start');
// const cancelButton = document.querySelector('#cancel');
// function cancellableDelayedResolve(delay) {
//     setTimeout(console.log, 0, "set delay");
//     return new Promise((resolve, reject) => {
//         const id = setTimeout((() => {
//             setTimeout(console.log, 0, "delayed resolve");
//             resolve();
//         }), delay);

//         const cancelToken = new CancelToken((cancelCallback) =>
//             cancelButton.addEventListener("click", cancelCallback));
//         cancelToken.promise.then(() => clearTimeout(id));
//     });
// }
// startButton.addEventListener("click", () => cancellableDelayedResolve(1000));

// let a = new Promise((resolve, reject) => {
//     resolve(true)
// })

// let b = new Promise((resolve, reject) => {
//     resolve(false)
// })

// b.then(res => console.log(res))
// a.then(res => console.log(res))

async function foo() {
    console.log(2);
    console.log(await Promise.resolve(8));
    console.log(9);
}
async function bar() {
    console.log(4);
    console.log(await 6);
    console.log(7);
}
console.log(1);
foo();
console.log(3);
bar();
console.log(5);


