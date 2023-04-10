def common_elements(list1, list2):
    result = []
    for element in list1:
        if element in list2 and element not in result:
            result.append(element)
    return result

# Example usage
list1 = [1, 2, 3, 4, 5]
list2 = [3, 4, 5, 6, 7]
common = common_elements(list1, list2)
print(common)
