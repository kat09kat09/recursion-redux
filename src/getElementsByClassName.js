// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

// NEW VERSION! 

var getElementsByClassName = function(className, node) {
    node = node || document.body;
    var nodes = [];
    if ("classList" in node && node.classList.contains(className)) { //saves having to nest "if" statements. If classList isn't found in node, node.classList.contains(className) is never evaluated, preventing a "cannot read property" error which results from trying to read contains on undefined (when node isn't an element).
        nodes.push(node);
    }
    for (var i = 0; i < node.childNodes.length; i++) {
        nodes = nodes.concat(getElementsByClassName(className, node.childNodes[i]));
    }
    console.log('current nodes', nodes);
    return nodes;
};

