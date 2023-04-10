package s4;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;
public class s4 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		 try {
	            // Create File objects for the input and output files
	            File inputFile = new File("C:\\Users\\jainroh\\OneDrive - Tecnotree\\Documents\\input.txt");
	            File outputFile = new File("C:\\Users\\jainroh\\OneDrive - Tecnotree\\Documents\\text.txt");

	            // Create Scanner and PrintWriter objects to read from and write to the files
	            Scanner scanner = new Scanner(inputFile);
	            PrintWriter writer = new PrintWriter(outputFile);

	            // Create a Map to store the total grade and number of grades for each student
	            Map<String, Integer> totalGrades = new HashMap<>();
	            Map<String, Integer> numGrades = new HashMap<>();

	            // Loop through each line in the input file and calculate the total and number of grades for each student
	            while (scanner.hasNextLine()) {
	                // Read in the next line of text
	                String line = scanner.nextLine();

	                // Split the line into fields using a comma as the delimiter
	                String[] fields = line.split(",");

	                // Extract the student name and grade from the fields
	                String student = fields[0];
	                int grade = Integer.parseInt(fields[1]);

	                // Update the total grade and number of grades for the student in the Map
	                if (totalGrades.containsKey(student)) {
	                    totalGrades.put(student, totalGrades.get(student) + grade);
	                    numGrades.put(student, numGrades.get(student) + 1);
	                } else {
	                    totalGrades.put(student, grade);
	                    numGrades.put(student, 1);
	                }
	            }

	            // Loop through each student in the Map and calculate their average grade
	            for (String student : totalGrades.keySet()) {
	                int total = totalGrades.get(student);
	                int num = numGrades.get(student);
	                double average = (double) total / num;

	                // Write the student name and average grade to the output file
	                writer.println(student + "," + average);
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
