package aa5;
import java.io.File;
import java.io.FileNotFoundException;
import java.util.*;
public class aa5 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		HashSet<String> wordSet = new HashSet<>();

        try {
            Scanner scanner = new Scanner(new File("C:\\Users\\jainroh\\OneDrive - Tecnotree\\Documents\\input.txt"));
            while (scanner.hasNext()) {
                String word = scanner.next().replaceAll("[^a-zA-Z0-9]", "").toLowerCase();
                wordSet.add(word);
            }
            scanner.close();
        } catch (FileNotFoundException e) {
            System.out.println("Error: File not found.");
            System.exit(1);
        }

        System.out.println("Number of unique words in the file: " + wordSet.size());

	}

}
