package s1;
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;
public class s1 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		try {
            // Create a new File object and a Scanner object to read from it
            File file = new File("C:\\Users\\jainroh\\OneDrive - Tecnotree\\Documents\\text.txt");
            Scanner scanner = new Scanner(file);

            // Initialize a variable to keep track of the word count
            int count = 0;

            // Loop through each line in the file
            while (scanner.hasNextLine()) {
                // Read in the next line of text
                String line = scanner.nextLine();

                // Split the line into words using whitespace as the delimiter
                String[] words = line.split("\\s+");

                // Add the number of words in the line to the total count
                count += words.length;
            }

            // Display the total number of words in the file
            System.out.println("Total number of words: " + count);

            // Close the Scanner object to free up resources
            scanner.close();

        } catch (FileNotFoundException e) {
            // Handle the case where the file is not found
            System.out.println("File not found: " + e.getMessage());
        }

	}

}
