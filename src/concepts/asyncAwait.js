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
