let i=2;
function createListElement() {
  const li = document.createElement("li");
  li.classList.add("card", "mt-2", "bg-success");
  li.innerHTML = 
    `<div class="card-body">
      <h3 class="card-title">ListItem ${i++}</h3>
    </div>`;
  return li;
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
function $WD_check_Li(Li) {
  return Li instanceof HTMLLIElement;
}
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
