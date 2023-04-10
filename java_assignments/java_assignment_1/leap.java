package leap;
import java.util.Scanner;
public class leap {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner input= new Scanner(System.in);
		System.out.println("Enter the Year");
		int a= input.nextInt();
		if (a%4==0 && a%100!=0 || a%400==0) {
			System.out.println("the given year is leap year");
		}
		else {
			System.out.println("the given year is  not leap year");
		}
		

	}

}
