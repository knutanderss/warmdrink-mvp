# What gets generated?

(Side note: By using Typescript or Flow Type we can generate javascript with type annotations, and optimize by type checking of single values before run-time)

```
placeholders
  a, b, c: Li where `Li instanceof HTMLLIElement`
```
generates
```javascript
function $WD_check_Li(Li) {
  return Li instanceof HTMLLIElement;
}
```

## Relations
```
relations
  (precedes) a, b ::= (`isAfter(a, b)`, `insertAfter(a, b)`)
```
generates
```javascript
function $WD_check_precedes(a, b) {
  // typecheck a and b?
  const typeCheck = $WD_check_Li(a) && $WD_check_Li(b);
  if (!typeCheck) {
    console.log("Typechecking failed. Checking type Li for ", a, b);
    return;
  }

  // check relation
  return isAfter(a, b);
}

function $WD_perform_precedes(a, b) {
  // typecheck a and b?
  const typeCheck = $WD_check_Li(a) && $WD_check_Li(b);
  if (!typeCheck) {
    console.log("Typechecking failed. Checking type Li for ", a, b);
    return;
  }

  insertAfter(a, b);
}
```


## Rules
```
rules
  addBetween: a precedes b, c => a precedes c, c precedes b
```
generates

```javascript
function addBetween(a, b, c) {
  // typecheck a, b, and c?
  const typeCheck = $WD_check_Li(a) && $WD_check_Li(b) && $WD_check_Li(c);
  if (!typeCheck) {
    console.log("Typechecking failed. Checking type Li for ", a, b, c);
    return;
  }

  // check precondition relations
  preCondition = $WD_check_precedes(a, b); // && could me more here
  if (!preCondition) {
    console.log("Precondition not holding for rule addBetween on ", a, b, c);
    return;
  }

  // perform new relations from left to right
  $WD_perform_precedes(a, c);
  $WD_perform_precedes(c, b);

  // check that all relations hold
  postCondition = $WD_check_precedes(a, b); // && could me more here
  if (!preCondition) {
    console.log("Postcondition not holding for rule addBetween on ", a, b, c);
    return;
  }
}
```
