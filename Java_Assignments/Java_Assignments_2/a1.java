package a1;
import java.util.Scanner;

public class a1 {
	

			    private String make;
			    private String model;
			    private int year;
			    private String color;
			    private double price;
			    
			    public a1(String make, String model, int year, String color, double price) {
			        this.make = make;
			        this.model = model;
			        this.year = year;
			        this.color = color;
			        this.price = price;
			    }
			    
			    public String getMake() {
			        return make;
			    }
			    
			    public void setMake(String make) {
			        this.make = make;
			    }
			    
			    public String getModel() {
			        return model;
			    }
			    
			    public void setModel(String model) {
			        this.model = model;
			    }
			    
			    public int getYear() {
			        return year;
			    }
			    
			    public void setYear(int year) {
			        this.year = year;
			    }
			    
			    public String getColor() {
			        return color;
			    }
			    
			    public void setColor(String color) {
			        this.color = color;
			    }
			    
			    public double getPrice() {
			        return price;
			    }
			    
			    public void setPrice(double price) {
			        this.price = price;
			    }
			    
			    public static void main(String[] args) {
			        Scanner scanner = new Scanner(System.in);
			        
			        System.out.print("Enter car make: ");
			        String make = scanner.nextLine();
			        
			        System.out.print("Enter car model: ");
			        String model = scanner.nextLine();
			        
			        System.out.print("Enter car year: ");
			        int year = scanner.nextInt();
			        scanner.nextLine(); // consume newline left-over
			        
			        System.out.print("Enter car color: ");
			        String color = scanner.nextLine();
			        
			        System.out.print("Enter car price: ");
			        double price = scanner.nextDouble();
			        
			        a1 car = new a1(make, model, year, color, price);
			        
			        System.out.println("Make: " + car.getMake());
			        System.out.println("Model: " + car.getModel());
			        System.out.println("Year: " + car.getYear());
			        System.out.println("Color: " + car.getColor());
			        System.out.println("Price: " + car.getPrice());
			    }
			}

