// async is a keyword that enable asynchonous, promise based expression to be
// writen in a cleaner style
async function add(x, y) {
  // equal: return Promise.resolved(x + y)
  return x + y;
}

// async can be defined as expression
const getTodo = async (id) => {
  // await is a special keyword that "wait" for a result after fullfillment (success)
  // or reject (fail) promise
  const todo = await TodoDatabase.get(id);

  return todo;
};

// note that `await` can use only inside `async` function (before ES2020 versions)
const validate = async (todo) => {
  // this function will be execute synchonously, and wait for evaluation success
  // (or fail) before move to next line
  await Validator.checkHeader(todo);
  // this function will be execute after last `await` run successfully without any error
  await Validator.checkEveryFieldType(todo);
};

async function foo() {
  const a = () =>
    new Promise((resolved) => {
      setTimeout(() => {
        resolved('a');
      }, 3000);
    });

  const b = () =>
    new Promise((resolved) => {
      setTimeout(() => {
        resolved('b');
      }, 2000);
    });

  // DON'T do this! Use `Promise.all() or Promise.allSettled() instead!
  const result = [await a(), await b()];

  // DO this instead
  const result = await Promise.all([a(), b()]);
}

// async function that on top-level (e.g. your main function)
// should handle an error with `try-catch`
// or that error would be unhandled.
// This is call `unhandled rejection`
async function findSomethingToDrink() {
  try {
    await drink('coffee');
  } catch (error) {
    console.error(error); // output: Error: I want to drink a Coke (with a tracing stack for debugging purpose)
  }
}

// on the lower level of abstraction, you might not need to handle the error (Don't repeat yourself)
// unless you want to throw with another custom error
async function drink(bottle) {
  if (bottle !== 'Coke') {
    throw new Error('I want to drink a Coke');
  }

  console.log('Refresh!');
}
