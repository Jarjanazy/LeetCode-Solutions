/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (head === null) return [];
    if (head.next === null) return head;
    
    const newHead = head.next;
    let currentSwappedPairSecondNode;
    let currentNode = head;
    while(true){
        currentSwappedPairSecondNode = swapNodeWithNextAndReturnIt(currentNode);
        console.log(newHead);
        if (currentSwappedPairSecondNode.next === null) return newHead;

        let nextPairSecondNode = currentSwappedPairSecondNode.next.next;
       
        if (nextPairSecondNode === null) return newHead;

        currentNode = currentSwappedPairSecondNode.next;
        currentSwappedPairSecondNode.next = nextPairSecondNode;
        console.log(newHead, currentNode, currentSwappedPairSecondNode);

    }
};

function swapNodeWithNextAndReturnIt(currentNode){
    let nextNode = currentNode.next;
    currentNode.next = nextNode.next;
    nextNode.next = currentNode;
    return nextNode;
}