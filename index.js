let i = 2;
function createListElement() {
  const left = document.createElement("li");
  left.classList.add("card", "mt-2", "bg-success");
  left.id = `g${i}`;
  left.innerHTML = `<div class="card-body">
      <h3 class="card-title">ListItem ${i}</h3>
    </div>`;

  const right = document.createElement("li");
  right.classList.add("card", "mt-2", "bg-warning");
  right.id = `y${i}`;
  right.innerHTML = `<div class="card-body">
      <h3 class="card-title">ListItem ${i}</h3>
    </div>`;
  i++;
  return [left, right];
}

function insertAfter(before, after) {
  before.parentNode.insertBefore(after, before.nextSibling);
}

function isAfter(before, after) {
  return before.nextElementSibling === after;
}

//////////////////////////////////////////////////////////////////////
// generated
//
function $WD_expect_Li(Li) {
  if (!(Li instanceof HTMLLIElement)) {
    console.log("Typechecking failed. Checking type Li for ", Li);
    throw Error(`Typechecking failed for Li`);
  }
}

function $WD_test_precedes(a, b) {
  // typecheck a and b
  $WD_expect_Li(a);
  $WD_expect_Li(b);

  // check relation
  return isAfter(a, b);
}

function $WD_establish_precedes(a, b) {
  // typecheck a and b
  $WD_expect_Li(a);
  $WD_expect_Li(b);

  // establish relation
  insertAfter(a, b);

  // test relation predicate
  if (!$WD_test_precedes(a, b)) {
    throw Error(
      `Relation predicate not satisfied after relation was established`
    );
  }
}

function $WD_test_new(c) {
  // typecheck c
  $WD_expect_Li(c);

  // nothing to test
}

function $WD_establish_new(c) {
  // typecheck c
  $WD_expect_Li(c);

  // nothing to establish

  // test relation predicate
  if (!$WD_test_new(c)) {
    throw Error(
      `Relation predicate not satisfied after relation was established`
    );
  }
}

function addBetween(a, b, c) {
  // typecheck a, b, and c
  $WD_expect_Li(a);
  $WD_expect_Li(b);
  $WD_expect_Li(c);

  // check precondition relations
  preCondition = $WD_test_precedes(a, b); // && could be more here
  if (!preCondition) {
    console.log("Precondition not holding for rule addBetween on ", a, b, c);
    return;
  }

  // perform new relations from left to right
  $WD_establish_precedes(a, c);
  $WD_establish_precedes(c, b);

  // check that all relations hold
  postCondition = $WD_test_precedes(a, b); // && could me more here
  if (!preCondition) {
    console.log("Postcondition not holding for rule addBetween on ", a, b, c);
    return;
  }
}
