// function getData(){
//   return new Promise((resolve,reject)=>{
//     setTimeout (()=>{
//       resolve(255)
//     },3000);
//   })
// }

//this is by simple asyncronous programing.....
// console.log('task 1');
// console.log('task2');
// console.log('task 3');

// const data = getData();
// console.log(data);

// console.log('task4');
// console.log('task5');

//this is waiting for 3 sec and
//if we need to wait it then use (then)...



//by using Async Await

async function getData(){
  return new Promise((resolve,reject)=>{
    setTimeout (()=>{
      resolve(255)
    },3000);
  })
}

async function main() {
    console.log('task 1');
    console.log('task2');
    console.log('task 3');

    const data = await getData();

    console.log('task4');
    console.log('task5');
}
main()

