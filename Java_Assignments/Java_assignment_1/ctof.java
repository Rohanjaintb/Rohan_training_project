package ctof;
import java.util.Scanner;

public class ctof {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner input = new Scanner(System.in);
        System.out.print("Enter a temperature in celsius: ");
        //char letter = input.next().charAt(0);
        //int Value = (int) letter;
        double c=input.nextDouble();
        double f=(c*9/5)+32;
        System.out.println("Temperature in Fahrenheit is"+f);

	}

}
