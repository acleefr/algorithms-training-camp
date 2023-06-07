#function to convert roman numerals to integers
def roman_to_int(s):
    roman_dict = {'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000}
    num = 0
    for i in range(len(s)):
        if i > 0 and roman_dict[s[i]] > roman_dict[s[i-1]]:
            num += roman_dict[s[i]] - 2 * roman_dict[s[i-1]]
        else:
            num += roman_dict[s[i]]
    return num
