package productofnum;
import java.util.Scanner;
public class productofnum {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner input= new Scanner(System.in);
		System.out.println("Enter the first numer");
		int a= input.nextInt();
		System.out.println("Enter the Second numer");
		int b= input.nextInt();
		int c=a*b;
		System.out.println("Product of two number is "+c);
	}

}
