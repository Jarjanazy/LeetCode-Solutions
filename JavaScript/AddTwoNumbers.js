/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    return addTwStringsIntoLinkedList(convertLinkedListIntoReversedString(l1), convertLinkedListIntoReversedString(l2));
};

class ListNode{
    constructor(val, next){
        this.val = (val===undefined ? 0 : val);
        this.next = (next===undefined ? null : next);
    }
    setNext(next){
        this.next = next;
    }
}

function addTwStringsIntoLinkedList(s1, s2){
    let intSum = Number(s1) + Number(s2);
    let stringSum = intSum.toString();

    console.log(stringSum);

    const rootNode = new ListNode(stringSum.charAt(stringSum.length-1), null);

    for (let i = stringSum.length-2; i >=0 ; i--){
        getLastNode(rootNode).setNext(new ListNode(stringSum.charAt(i), null)); 
    }

    return rootNode;
}

function getLastNode(rootNode){
    while(rootNode.next !== null){
        rootNode = rootNode.next;
    }
    return rootNode;
}

function convertLinkedListIntoReversedString(linkedList){
    let currentValue = '' + linkedList.val;
    let nextNode = linkedList.next;
    while(nextNode !== null){
        currentValue += nextNode.val;
        nextNode = nextNode.next;
    }
    return currentValue.split("").reverse().join("");
}

// [1 4 9] 1 