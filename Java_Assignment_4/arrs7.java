package arrs7;
public class arrs7 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub String str = "apple,banana,cherry,date,elderberry";

        // split the string into an array of substrings
        String[] arr = str.split(",");

        // print the array of substrings
        for (String s : arr) {
            System.out.println(s);
        }

	}

}
