const { BinaryTreeNode } = require('./binary-tree-node');

class BinaryTreeOps {
    static inOrder(root) {
        let results = "";
        traverse(root);
        return results;

        function traverse(root) {
            if(!root) {
                return;
            }
            traverse(root.left);
            results += `${root.value} `;
            traverse(root.right);
        }
    }

    static preOrder(root) {
        let results = "";
        traverse(root);
        return results;

        function traverse(root) {
            if(!root) {
                return;
            }
            results += `${root.value} `;
            traverse(root.left);
            traverse(root.right);
        }
    }

    static postOrder(root) {
        let results = "";
        traverse(root);
        return results;

        function traverse(root) {
            if(!root) {
                return;
            }
            traverse(root.left);
            traverse(root.right);
            results += `${root.value} `;
        }
    }
}

module.exports = {
    BinaryTreeOps
}