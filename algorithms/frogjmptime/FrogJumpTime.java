/**
 * Solution
 */
import java.util.*;

public class FrogJumpTime {

    public int solution(int X, int[] A) {
        Set<Integer> leavesSet = new HashSet<Integer>();

        for (int i = 0; i < A.length; i++) {
            int leaveIndex = A[i];

            if (leaveIndex <= X) {
                leavesSet.add(A[i]);
            }

            if (leavesSet.size() == X) {
                return i;
            }
        }

        return -1;
    }

    public static void main(String[] args) {
        FrogJumpTime solution = new FrogJumpTime();

        int result = solution.solution(3, new int[] { 1, 3, 1, 4, 1, 3, 5, 4 });

        System.out.println("Your result: " + result);

    }
}