package a2;
import java.util.Scanner;

public class a2 {
	
	    private String name;
	    private int age;
	    private String gender;
	    private int grade;
	    private double gpa;

	    public a2(String name, int age, String gender, int grade, double gpa) {
	        this.name = name;
	        this.age = age;
	        this.gender = gender;
	        this.grade = grade;
	        this.gpa = gpa;
	    }

	    public String getName() {
	        return name;
	    }

	    public void setName(String name) {
	        this.name = name;
	    }

	    public int getAge() {
	        return age;
	    }

	    public void setAge(int age) {
	        this.age = age;
	    }

	    public String getGender() {
	        return gender;
	    }

	    public void setGender(String gender) {
	        this.gender = gender;
	    }

	    public int getGrade() {
	        return grade;
	    }

	    public void setGrade(int grade) {
	        this.grade = grade;
	    }

	    public double getGpa() {
	        return gpa;
	    }

	    public void setGpa(double gpa) {
	        this.gpa = gpa;
	        }
	        public static void main(String[] args) {
		        Scanner scanner = new Scanner(System.in);
		        
		        System.out.print("Enter name: ");
		        String name = scanner.nextLine();
		        
		        System.out.print("Enter age: ");
		        int age = scanner.nextInt();
		        
		        System.out.print("Enter gender: ");
		        String gender = scanner.nextLine();
		        scanner.nextLine(); // consume newline left-over
		        
		        System.out.print("Enter Grade: ");
		        int Grade = scanner.nextInt();
		        
		        System.out.print("Enter gpa: ");
		        double gpa = scanner.nextDouble();
		        
		        a2 car = new a2(name, age, gender, Grade, gpa);
		        
		        System.out.println("Name: " + car.getName());
		        System.out.println("Age: " + car.getAge());
		        System.out.println("Gender: " + car.getGender());
		        System.out.println("Grade: " + car.getGrade());
		        System.out.println("gpa: " + car.getGpa());
	        
	    }
	}


