package ascii;
import java.util.Scanner;
public class ascii {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner input = new Scanner(System.in);
        System.out.print("Enter a character: ");
        char letter = input.next().charAt(0);
        int Value = (int) letter;
        System.out.println("The ASCII value of " + letter + " is " + Value);
 

	}

}
