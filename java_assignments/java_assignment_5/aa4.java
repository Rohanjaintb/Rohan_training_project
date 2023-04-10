package aa4;
import java.util.*;
public class aa4 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		LinkedList<String> queue = new LinkedList<>();

        Scanner scanner = new Scanner(System.in);
        while (true) {
            System.out.print("Enter a command (add/remove/quit): ");
            String command = scanner.nextLine();

            if (command.equals("quit")) {
                break;
            } else if (command.equals("add")) {
                System.out.print("Enter an item to add: ");
                String item = scanner.nextLine();
                queue.addLast(item);
                System.out.println("Added " + item + " to the queue.");
            } else if (command.equals("remove")) {
                if (queue.isEmpty()) {
                    System.out.println("The queue is empty.");
                } else {
                    String item = queue.removeFirst();
                    System.out.println("Removed " + item + " from the queue.");
                }
            } else {
                System.out.println("Invalid command. Please enter add, remove, or quit.");
            }

            System.out.println("Current queue: " + queue);
        }

        scanner.close();

	}

}
