const { BinaryTreeNode } = require('../app/binary-tree-node');
const { BinaryTreeOps } = require('../app/binary-tree-ops');

describe("BinaryTreeOps", () => {
    let testTree;
    
    beforeEach(() => {
        testTree = new BinaryTreeNode(4, 
                            new BinaryTreeNode(6,
                                    new BinaryTreeNode(2),
                                    new BinaryTreeNode(1)),
                    new BinaryTreeNode(3))
    });

    it("should print the tree's values using in-order traversal", () => {
        let results = BinaryTreeOps.inOrder(testTree);
        expect(results).toContain("2 6 1 4 3");
    });

    it("should print the tree's values using pre-order traversal", () => {
        let results = BinaryTreeOps.preOrder(testTree);
        expect(results).toContain("4 6 2 1 3");
    })

    it("should print the tree's values using post-order traversal", () => {
        let results = BinaryTreeOps.postOrder(testTree);
        expect(results).toContain("2 1 6 3 4");
    })
})