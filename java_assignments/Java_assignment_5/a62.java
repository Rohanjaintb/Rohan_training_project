package a62;
import java.util.*;
public class a62 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Map<String, String> dictionary = new HashMap<>();

        // Add some initial words and meanings to the dictionary
        dictionary.put("apple", "a round fruit with red or green skin and a white inside");
        dictionary.put("banana", "a long curved fruit with a yellow skin");
        dictionary.put("cat", "a small carnivorous mammal with soft fur");

        Scanner scanner = new Scanner(System.in);
        while (true) {
            System.out.print("Enter a word (or 'quit' to exit): ");
            String word = scanner.nextLine();
            if (word.equals("quit")) {
                break;
            }

            String meaning = dictionary.get(word);
            if (meaning == null) {
                System.out.println("Sorry, that word is not in the dictionary.");
            } else {
                System.out.println(word + ": " + meaning);
            }
        }

        // Allow the user to add new words and meanings to the dictionary
        while (true) {
            System.out.print("Enter a word to add (or 'quit' to exit): ");
            String word = scanner.nextLine();
            if (word.equals("quit")) {
                break;
            }

            System.out.print("Enter the meaning of '" + word + "': ");
            String meaning = scanner.nextLine();
            dictionary.put(word, meaning);
            System.out.println("Added '" + word + "' to the dictionary.");
        }

        scanner.close();

	}

}
