def median(numbers):
    numbers.sort()
    length = len(numbers)
    if length % 2 == 0:
        # If the list has an even number of elements, take the average of the two middle values
        mid = length // 2
        return (numbers[mid - 1] + numbers[mid]) / 2
    else:
        # If the list has an odd number of elements, return the middle value
        mid = length // 2
        return numbers[mid]

# Example usage
my_numbers = [1, 2, 5, 7, 8, 10]
median_value = median(my_numbers)
print(median_value)
