package arr6;
import java.util.Arrays;
public class arr6 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String[] arr = {"apple", "banana", "cherry", "date", "elderberry"};

        // sort the array in ascending order
        Arrays.sort(arr);

        // print the sorted array
        System.out.println("Sorted array: " + Arrays.toString(arr));

        // search for the index of "cherry" in the array
        int index = Arrays.binarySearch(arr, "cherry");

        // print the index of "cherry" in the array
        System.out.println("Index of \"cherry\" in the array: " + index);

	}

}
