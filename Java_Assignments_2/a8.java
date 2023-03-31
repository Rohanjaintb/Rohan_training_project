package a8;
import java.util.Scanner;
public class a8 {
	
			    
			    private double base;
			    private double height;
			    private double area;
			    
			    // Constructor
			    public a8(double base, double height) {
			        this.base = base;
			        this.height = height;
			        this.area = calculateArea();
			    }
			    
			    // Method to calculate area
			    public double calculateArea() {
			        return 0.5 * base * height;
			    }
			    
			    // Getters and Setters
			    public double getBase() {
			        return base;
			    }
			    
			    public void setBase(double base) {
			        this.base = base;
			        this.area = calculateArea();
			    }
			    
			    public double getHeight() {
			        return height;
			    }
			    
			    public void setHeight(double height) {
			        this.height = height;
			        this.area = calculateArea();
			    }
			    
			    public double getArea() {
			        return area;
			    }
			    
			    // Main method to take user input and create Triangle object
			    public static void main(String[] args) {
			        Scanner input = new Scanner(System.in);
			        
			        System.out.print("Enter base length: ");
			        double base = input.nextDouble();
			        
			        System.out.print("Enter height length: ");
			        double height = input.nextDouble();
			        
			        // Create Triangle object using user input
			        a8 triangle = new a8(base, height);
			        
			        // Print out triangle object properties
			        System.out.println("Base: " + triangle.getBase());
			        System.out.println("Height: " + triangle.getHeight());
			        System.out.println("Area: " + triangle.getArea());
			    }
			}

