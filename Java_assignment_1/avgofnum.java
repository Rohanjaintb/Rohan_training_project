package avgofnum;
import java.util.Scanner;

public class avgofnum {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner input= new Scanner(System.in);
		System.out.println("Enter the first numer");
		int a= input.nextInt();
		System.out.println("Enter the Second numer");
		int b= input.nextInt();
		System.out.println("Enter the Third numer");
		int c= input.nextInt();
		int d=(a+b+c)/3;
		System.out.println("Avg of three number is "+d);
	}

}
