package a5;
import java.util.Scanner;

public class a5 {
	
			    private int accountNumber;
			    private double accountBalance;
			    private String accountHolderName;
			    private String accountType;

			    public a5(int accountNumber, double accountBalance, String accountHolderName, String accountType) {
			        this.accountNumber = accountNumber;
			        this.accountBalance = accountBalance;
			        this.accountHolderName = accountHolderName;
			        this.accountType = accountType;
			    }

			    public void deposit(double amount) {
			        accountBalance += amount;
			        System.out.println(amount + " deposited successfully. Your new account balance is " + accountBalance);
			    }

			    public void withdraw(double amount) {
			        if (amount > accountBalance) {
			            System.out.println("Insufficient balance. Unable to withdraw " + amount);
			        } else {
			            accountBalance -= amount;
			            System.out.println(amount + " withdrawn successfully. Your new account balance is " + accountBalance);
			        }
			    }

			    public static void main(String[] args) {
			        Scanner scanner = new Scanner(System.in);

			        System.out.println("Enter Account Number: ");
			        int accountNumber = scanner.nextInt();

			        System.out.println("Enter Account Balance: ");
			        double accountBalance = scanner.nextDouble();

			        System.out.println("Enter Account Holder Name: ");
			        String accountHolderName = scanner.next();

			        System.out.println("Enter Account Type: ");
			        String accountType = scanner.next();

			        a5 account = new a5(accountNumber, accountBalance, accountHolderName, accountType);

			        System.out.println("Enter amount to deposit: ");
			        double amountToDeposit = scanner.nextDouble();
			        account.deposit(amountToDeposit);

			        System.out.println("Enter amount to withdraw: ");
			        double amountToWithdraw = scanner.nextDouble();
			        account.withdraw(amountToWithdraw);

			        scanner.close();
			    }
			}



