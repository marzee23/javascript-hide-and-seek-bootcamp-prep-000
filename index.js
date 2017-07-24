//Define a function `getFirstSelector(selector)`, which accepts a selector and returns the first element that matches.
function getFirstSelector(selector) {
    return document.querySelector(selector);
};

//Define a function `nestedTarget()` that pulls a `.target` out of `#nested`
//(`#` is used for IDs in selectors — but you knew that because you [read the docs]
//(https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Selectors), right? :) ).
//(Note that in `index.html` `#nested` and `.target` just _happen_ to be `div`s. This method should work with arbitrary elements.)
function nestedTarget() {
    return document.querySelector('#nested .target');
};
//Define a function `increaseRankBy(n)` that increases the ranks in all of the `.ranked-list`s by `n`. (You might need to make use of [`parseInt()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
function increaseRankBy(n){
    var rankedLists = document.getElementById('app').querySelectorAll('.ranked-list li');
    for (var i=0; i < rankedLists.length; i++) {
        rankedLists[i].innerHTML = parseInt(rankedLists[i].innerHTML) + n;
    };
};

//Define a function `deepestChild()` that pulls out the most deeply nested child
//from `div#grand-node`. (Remember, you can iterate over elements and call
//`querySelector()` and `querySelectorAll()` on them. This is challenging to
//implement correctly, but not beyond your ability!)
//**HINT 1**: Your solution for `deepestChild()` does not need to be totally
//generic; we don't expect it to work in every case. For example, we know that
//`div#grand-node` has only one node at each level — for this lab, you can solve
//for that case, and not worry about a case where there are sibling nodes.
//**HINT**: Remember learning about breadth-first search? A similar technique
//might come in handy here.

function deepestChild() {
    return document.querySelector('#grand-node div div div div')
};
