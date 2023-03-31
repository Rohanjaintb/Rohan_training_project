package a7;
import java.util.Scanner;
public class a7 {
	
	


			    
			    private String name;
			    private String species;
			    private int age;
			    private double weight;
			    
			    // Constructor
			    public a7(String name, String species, int age, double weight) {
			        this.name = name;
			        this.species = species;
			        this.age = age;
			        this.weight = weight;
			    }
			    
			    // Getters and Setters
			    public String getName() {
			        return name;
			    }
			    
			    public void setName(String name) {
			        this.name = name;
			    }
			    
			    public String getSpecies() {
			        return species;
			    }
			    
			    public void setSpecies(String species) {
			        this.species = species;
			    }
			    
			    public int getAge() {
			        return age;
			    }
			    
			    public void setAge(int age) {
			        this.age = age;
			    }
			    
			    public double getWeight() {
			        return weight;
			    }
			    
			    public void setWeight(double weight) {
			        this.weight = weight;
			    }
			    
			    // Main method to take user input and create Animal object
			    public static void main(String[] args) {
			        Scanner input = new Scanner(System.in);
			        
			        System.out.print("Enter name: ");
			        String name = input.nextLine();
			        
			        System.out.print("Enter species: ");
			        String species = input.nextLine();
			        
			        System.out.print("Enter age: ");
			        int age = input.nextInt();
			        
			        System.out.print("Enter weight: ");
			        double weight = input.nextDouble();
			        
			        // Create Animal object using user input
			       a7 animal = new a7(name, species, age, weight);
			        
			        // Print out animal object properties
			        System.out.println("Name: " + animal.getName());
			        System.out.println("Species: " + animal.getSpecies());
			        System.out.println("Age: " + animal.getAge());
			        System.out.println("Weight: " + animal.getWeight());
			    }
			}


