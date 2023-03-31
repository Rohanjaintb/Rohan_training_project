package maxofnum;
import java.util.Scanner;
public class maxofnum {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
        System.out.print("Enter the first number: ");
        int num1 = sc.nextInt();
        System.out.print("Enter the second number: ");
        int num2 = sc.nextInt();
        int max = num1 > num2 ? num1 : num2;
        System.out.println("The maximum of " + num1 + " and " + num2 + " is " + max);


	}

}
