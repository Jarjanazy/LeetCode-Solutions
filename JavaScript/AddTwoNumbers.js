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
    let intSum = BigInt(s1) + BigInt(s2);
    let stringSum = BigInt(intSum) + '';

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