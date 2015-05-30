function inOrder(node) {
 if (node !== null) {
   inOrder(node.left);
   putstr(node.show() + " ");
   inOrder(node.right);
   }
}

function preOrder(node) {
 if (node !== null) {
   putstr(node.show() + " ");
   preOrder(node.left);
   preOrder(node.right);
 }
}

function postOrder(node) {
 if (node !== null) {
   postOrder(node.left);
   postOrder(node.right);
   putstr(node.show() + " ");
 }
}
