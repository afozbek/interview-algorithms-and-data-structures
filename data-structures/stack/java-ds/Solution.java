import java.io.*;
import java.util.*;

public class Solution {

    static class SinglyLinkedListNode {
        public int data;
        public SinglyLinkedListNode next;

        public SinglyLinkedListNode(int nodeData) {
            this.data = nodeData;
            this.next = null;
        }
    }

    static class SinglyLinkedList {
        public SinglyLinkedListNode head;
        public SinglyLinkedListNode tail;

        public SinglyLinkedList() {
            this.head = null;
            this.tail = null;
        }

        public void insertNode(int nodeData) {
            SinglyLinkedListNode node = new SinglyLinkedListNode(nodeData);

            if (this.head == null) {
                this.head = node;
            } else {
                this.tail.next = node;
            }

            this.tail = node;
        }
    }

    public static void printSinglyLinkedList(SinglyLinkedListNode node, String sep, BufferedWriter bufferedWriter) throws IOException {
        while (node != null) {
            bufferedWriter.write(String.valueOf(node.data));

            node = node.next;

            if (node != null) {
                bufferedWriter.write(sep);
            }
        }
    }

    static boolean hasCycle(SinglyLinkedListNode head) {
        if(head == null) return false;

        HashMap<SinglyLinkedListNode, Boolean> visitedNodes = new HashMap<SinglyLinkedListNode, Boolean>();

        while(head != null) {
            if(visitedNodes.containsKey(head)){
                return true;
            } else {
                visitedNodes.put(head, true);
            }

            head = head.next;
        }

        return false;
    }

    static int findMergeNode(SinglyLinkedListNode head1, SinglyLinkedListNode head2) {

        HashMap<SinglyLinkedListNode,Integer> visitedNodes = new HashMap<SinglyLinkedListNode, Integer>();

        while(head1 != null) {
            visitedNodes.put(head1, head1.data);

            head1 = head1.next;
        }

        while(head2 != null) {
            if(visitedNodes.containsKey(head2)){
                return head2.data;
            } else {
                visitedNodes.put(head2, head2.data);
            }

            head2 = head2.next;
        }

        return 0;
    }

    public static void main(String[] args) throws IOException {
      SinglyLinkedListNode nodeA = new SinglyLinkedListNode(0);
      SinglyLinkedListNode nodeB = nodeA.next = new SinglyLinkedListNode(3);
      SinglyLinkedListNode nodeC = nodeB.next = new SinglyLinkedListNode(5);
      SinglyLinkedListNode nodeD = nodeC.next = new SinglyLinkedListNode(7);

      SinglyLinkedListNode nodeE = new SinglyLinkedListNode(7);
      SinglyLinkedListNode nodeF = nodeE.next = new SinglyLinkedListNode(8);
      SinglyLinkedListNode nodeG = nodeF.next = new SinglyLinkedListNode(10);
      nodeG.next = nodeD;

      int result = Solution.findMergeNode(nodeA, nodeE);
      System.out.println(result);
  }
}
