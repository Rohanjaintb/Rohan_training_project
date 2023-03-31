package a10;
import java.util.Scanner;
public class a10 {
	
			    private String street;
			    private String city;
			    private String state;
			    private String zipCode;
			    private String country;
			    
			    public a10(String street, String city, String state, String zipCode, String country) {
			        this.street = street;
			        this.city = city;
			        this.state = state;
			        this.zipCode = zipCode;
			        this.country = country;
			    }
			    
			    public String getStreet() {
			        return street;
			    }
			    
			    public void setStreet(String street) {
			        this.street = street;
			    }
			    
			    public String getCity() {
			        return city;
			    }
			    
			    public void setCity(String city) {
			        this.city = city;
			    }
			    
			    public String getState() {
			        return state;
			    }
			    
			    public void setState(String state) {
			        this.state = state;
			    }
			    
			    public String getZipCode() {
			        return zipCode;
			    }
			    
			    public void setZipCode(String zipCode) {
			        this.zipCode = zipCode;
			    }
			    
			    public String getCountry() {
			        return country;
			    }
			    
			    public void setCountry(String country) {
			        this.country = country;
			    }
			    
			    public static void main(String[] args) {
			        Scanner scanner = new Scanner(System.in);
			        
			        System.out.print("Enter street address: ");
			        String street = scanner.nextLine();
			        
			        System.out.print("Enter city: ");
			        String city = scanner.nextLine();
			        
			        System.out.print("Enter state: ");
			        String state = scanner.nextLine();
			        
			        System.out.print("Enter ZIP code: ");
			        String zipCode = scanner.nextLine();
			        
			        System.out.print("Enter country: ");
			        String country = scanner.nextLine();
			        
			        a10 address = new a10(street, city, state, zipCode, country);
			        
			        System.out.println("Street address: " + address.getStreet());
			        System.out.println("City: " + address.getCity());
			        System.out.println("State: " + address.getState());
			        System.out.println("ZIP code: " + address.getZipCode());
			        System.out.println("Country: " + address.getCountry());
			    }
			}



