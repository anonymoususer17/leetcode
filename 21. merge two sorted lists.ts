/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let list3: ListNode = [];

    list1.forEach(element1 => {
        list2.forEach(element2 => {
            if(element1 <= element2){
                list3.next = element1;
                continue;
            }
            else{
                list3.next = element2;
            }
        });
    });

    return list3;
};