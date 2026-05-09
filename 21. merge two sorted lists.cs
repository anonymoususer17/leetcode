/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
public class Solution
{
    public ListNode MergeTwoLists(ListNode list1, ListNode list2)
    {
        ListNode ListNodeFinal = new ListNode();

        while (list1.val != 0 && list2.val != 0)
        {
            if (list1.val < list2.val)
            {
                ListNodeFinal.val = list1.val;
                list1 = list1.next;
                ListNodeFinal = ListNodeFinal.next;
            }
            else
            {
                ListNodeFinal.val = list2.val;
                list2 = list2.next;
                ListNodeFinal = ListNodeFinal.next;
            }
        }

        return ListNodeFinal;

    }
}