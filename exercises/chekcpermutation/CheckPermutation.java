import java.util.HashSet;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class CheckPermutation {

    public int solution(int[] A) {
        // write your code in Java SE 8
        int maxNum = 0;

        Set<Integer> elemSet = new HashSet<Integer>();

        for (int elem : A) {

            if (elem > maxNum) {
                maxNum = elem;
            }

            try {
                elemSet.add(elem);
            } catch (Exception ex) {
                System.out.println("Some exception occur while adding");
            }
        }

        if (maxNum == elemSet.size()) {
            return 1;
        }
        return 0;
    }

    public static void main(String[] args) {
        CheckPermutation solution = new CheckPermutation();

        int result = solution.solution(new int[] { 3, 4, 1, 1 });

        String message;

        try {
            if (result == 1) {
                message = "Wow your array contains permutation numbers";
            } else {
                message = "Nop, your array is just normal array, sorry...";
            }
            System.out.println(message);

        } catch (Exception ex) {
            ex.getStackTrace();
        }

    }
}