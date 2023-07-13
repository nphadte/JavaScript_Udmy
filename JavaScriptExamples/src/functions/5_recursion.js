function loop(x) {
    if (x >= 10) // "x >= 10" is the exit condition (equivalent to "!(x < 10)")
        return;
    // do stuff
    console.log("Executing the function :"+ x);
    loop(x + 1); // the recursive call
}
loop(0);

function walkTree(node) {
    if (node == null) //
        return;
    // do something with node



    for (var i = 0; i < node.childNodes.length; i++) {
        walkTree(node.childNodes[i]);
    }
}
