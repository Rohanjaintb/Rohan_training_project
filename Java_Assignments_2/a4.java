package a4;
import java.util.Scanner;
public class a4 {
	

			  private double length;
			  private double width;
			  private double area;

			  public a4() {
			    // Default constructor
			  }

			  public a4(double length, double width) {
			    this.length = length;
			    this.width = width;
			  }

			  public void calculateArea() {
			    this.area = this.length * this.width;
			  }

			  public void setLength(double length) {
			    this.length = length;
			  }

			  public void setWidth(double width) {
			    this.width = width;
			  }

			  public double getLength() {
			    return this.length;
			  }

			  public double getWidth() {
			    return this.width;
			  }

			  public double getArea() {
			    return this.area;
			  }

			  public static void main(String[] args) {
			    Scanner scanner = new Scanner(System.in);

			    System.out.print("Enter length: ");
			    double length = scanner.nextDouble();

			    System.out.print("Enter width: ");
			    double width = scanner.nextDouble();

			    a4 rectangle = new a4(length, width);
			    rectangle.calculateArea();

			    System.out.println("Area of the rectangle is: " + rectangle.getArea());
			  }
			}




