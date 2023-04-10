package s3;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.util.Scanner;
public class s3 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		try {
            // Create File objects for the input and output files
            File inputFile = new File("C:\\Users\\jainroh\\OneDrive - Tecnotree\\Documents\\input.txt");
            File outputFile = new File("C:\\Users\\jainroh\\OneDrive - Tecnotree\\Documents\\text.txt");

            // Create Scanner and PrintWriter objects to read from and write to the files
            Scanner scanner = new Scanner(inputFile);
            PrintWriter writer = new PrintWriter(outputFile);

            // Loop through each line in the input file and remove vowels from each line
            while (scanner.hasNextLine()) {
                // Read in the next line of text
                String line = scanner.nextLine();

                // Remove vowels from the line and write the result to the output file
                String lineWithoutVowels = line.replaceAll("[aeiouAEIOU]", "");
                writer.println(lineWithoutVowels);
            }

            // Close the Scanner and PrintWriter objects to free up resources
            scanner.close();
            writer.close();

        } catch (FileNotFoundException e) {
            // Handle the case where the input file is not found
            System.out.println("File not found: " + e.getMessage());
        }

	}

}
