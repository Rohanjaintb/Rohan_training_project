package a9;
import java.util.Scanner;
public class a9 {
	

			    private String name;
			    private int employeeID;
			    private String department;
			    private String jobTitle;
			    private double salary;
			    
			    public a9(String name, int employeeID, String department, String jobTitle, double salary) {
			        this.name = name;
			        this.employeeID = employeeID;
			        this.department = department;
			        this.jobTitle = jobTitle;
			        this.salary = salary;
			    }
			    
			    public String getName() {
			        return name;
			    }
			    
			    public void setName(String name) {
			        this.name = name;
			    }
			    
			    public int getEmployeeID() {
			        return employeeID;
			    }
			    
			    public void setEmployeeID(int employeeID) {
			        this.employeeID = employeeID;
			    }
			    
			    public String getDepartment() {
			        return department;
			    }
			    
			    public void setDepartment(String department) {
			        this.department = department;
			    }
			    
			    public String getJobTitle() {
			        return jobTitle;
			    }
			    
			    public void setJobTitle(String jobTitle) {
			        this.jobTitle = jobTitle;
			    }
			    
			    public double getSalary() {
			        return salary;
			    }
			    
			    public void setSalary(double salary) {
			        this.salary = salary;
			    }
			    
			    public static void main(String[] args) {
			        Scanner scanner = new Scanner(System.in);
			        
			        System.out.print("Enter employee name: ");
			        String name = scanner.nextLine();
			        
			        System.out.print("Enter employee ID: ");
			        int employeeID = scanner.nextInt();
			        scanner.nextLine();
			        
			        System.out.print("Enter employee department: ");
			        String department = scanner.nextLine();
			        
			        System.out.print("Enter employee job title: ");
			        String jobTitle = scanner.nextLine();
			        
			        System.out.print("Enter employee salary: ");
			        double salary = scanner.nextDouble();
			        
			        a9 employee = new a9(name, employeeID, department, jobTitle, salary);
			        
			        System.out.println("Employee name: " + employee.getName());
			        System.out.println("Employee ID: " + employee.getEmployeeID());
			        System.out.println("Employee department: " + employee.getDepartment());
			        System.out.println("Employee job title: " + employee.getJobTitle());
			        System.out.println("Employee salary: " + employee.getSalary());
			    }
			}



