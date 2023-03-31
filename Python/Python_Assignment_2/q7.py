def is_prime(num):
    if num < 2:
        return False
    for i in range(2, int(num ** 0.5) + 1):
        if num % i == 0:
            return False
    return True

def prime_numbers(numbers):
    primes = []
    for num in numbers:
        if is_prime(num):
            primes.append(num)
    return primes

# Example usage
my_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
prime_list = prime_numbers(my_numbers)
print(prime_list)

# num=(input("Enter the Number"))
# num=num.split()
# num=[int(i) for i in num]
# r=[]
# for i in num:
#     if i>=2:
        
#     for j in range(2,(int(i**0.5)+1)):
#         if i%j==0:
#             r.append(i)
# print(r)


