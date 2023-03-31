package a6;
import java.util.Scanner;
public class a6 {
	

			    private String name;
			    private int age;
			    private String address;
			    private String phoneNumber;
			    private String emailAddress;

			    public a6(String name, int age, String address, String phoneNumber, String emailAddress) {
			        this.name = name;
			        this.age = age;
			        this.address = address;
			        this.phoneNumber = phoneNumber;
			        this.emailAddress = emailAddress;
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

			    public String getAddress() {
			        return address;
			    }

			    public void setAddress(String address) {
			        this.address = address;
			    }

			    public String getPhoneNumber() {
			        return phoneNumber;
			    }

			    public void setPhoneNumber(String phoneNumber) {
			        this.phoneNumber = phoneNumber;
			    }

			    public String getEmailAddress() {
			        return emailAddress;
			    }

			    public void setEmailAddress(String emailAddress) {
			        this.emailAddress = emailAddress;
			    }

			    public static void main(String[] args) {
			        Scanner input = new Scanner(System.in);

			        System.out.print("Enter name: ");
			        String name = input.nextLine();

			        System.out.print("Enter age: ");
			        int age = input.nextInt();
			        input.nextLine();

			        System.out.print("Enter address: ");
			        String address = input.nextLine();

			        System.out.print("Enter phone number: ");
			        String phoneNumber = input.nextLine();

			        System.out.print("Enter email address: ");
			        String emailAddress = input.nextLine();

			        a6 person = new a6(name, age, address, phoneNumber, emailAddress);

			        System.out.println("\nName: " + person.getName());
			        System.out.println("Age: " + person.getAge());
			        System.out.println("Address: " + person.getAddress());
			        System.out.println("Phone number: " + person.getPhoneNumber());
			        System.out.println("Email address: " + person.getEmailAddress());
			    }
			}



