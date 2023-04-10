package s2;
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;
public class s2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		 try {
	            // Create File objects for the two files to be compared
	            File file1 = new File("C:\\Users\\jainroh\\OneDrive - Tecnotree\\Documents\\input.txt");
	            File file2 = new File("C:\\Users\\jainroh\\OneDrive - Tecnotree\\Documents\\text.txt");

	            // Create Scanner objects to read from each file
	            Scanner scanner1 = new Scanner(file1);
	            Scanner scanner2 = new Scanner(file2);

	            // Initialize a variable to keep track of whether the files are identical
	            boolean identical = true;

	            // Loop through each line in the files and compare them
	            while (scanner1.hasNextLine() && scanner2.hasNextLine()) {
	                // Read in the next line from each file
	                String line1 = scanner1.nextLine();
	                String line2 = scanner2.nextLine();

	                // Compare the lines and set the "identical" variable to false if they're different
	                if (!line1.equals(line2)) {
	                    identical = false;
	                    break;
	                }
	            }

	            // If the two files have different numbers of lines, they're not identical
	            if (scanner1.hasNextLine() || scanner2.hasNextLine()) {
	                identical = false;
	            }

	            // Display a message indicating whether the files are identical or not
	            if (identical) {
	                System.out.println("The files are identical.");
	            } else {
	                System.out.println("The files are not identical.");
	            }

	            // Close the Scanner objects to free up resources
	            scanner1.close();
	            scanner2.close();

	        } catch (FileNotFoundException e) {
	            // Handle the case where one of the files is not found
	            System.out.println("File not found: " + e.getMessage());
	        }
		

	}

}
