
/**
 * Counter
 */

public class Counter {

    public int[] solution(int N, int[] A) {

        int[] counters = new int[N];
        int maxCounter = 0;

        for (int i = 0; i < A.length; i++) {
            int operation = A[i];

            if (1 <= operation && operation <= N) {
                counters[operation - 1] += 1;

                if (counters[operation - 1] > maxCounter) {
                    maxCounter = counters[operation - 1];
                }
            } else if (operation == (N + 1)) {
                counters = setAllCounterToMax(maxCounter, counters);
            } else {
                continue;
            }
        }

        return counters;
    }

    public int[] setAllCounterToMax(int max, int[] counters) {
        for (int i = 0; i < counters.length; i++) {
            counters[i] = max;
        }
        return counters;
    }

    public static void main(String[] args) {
        Counter counter = new Counter();

        counter.solution(5, new int[] { 3, 4, 4, 6, 1, 4, 4 });
    }
}