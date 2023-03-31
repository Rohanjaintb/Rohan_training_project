package a63;
import java.util.*;
public class a63 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
        Set<Integer> integerSet = new TreeSet<>();

        Scanner scanner = new Scanner(System.in);
        while (true) {
            System.out.print("Enter an integer to add/remove (or 'quit' to exit): ");
            String input = scanner.nextLine();
            if (input.equals("quit")) {
                break;
            }

            try {
                int value = Integer.parseInt(input);
                if (integerSet.contains(value)) {
                    integerSet.remove(value);
                    System.out.println("Removed " + value + " from the set.");
                } else {
                    integerSet.add(value);
                    System.out.println("Added " + value + " to the set.");
                }
                System.out.println("Current set: " + integerSet);
            } catch (NumberFormatException e) {
                System.out.println("Invalid input. Please enter an integer.");
            }
        }

        scanner.close();


	}

}
