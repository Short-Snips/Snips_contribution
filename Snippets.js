export const Articles=[
    {
        "uuid":"98879124-986e-4a08-887f-5e918e89a558",
        "title": "Sum of numbers in a string",
        "tags": ["String"],
        "language":"python",
        "short_intro":" Function calculates the sum of all the numbers in the given string",
        "contributor_name":"dinesh bhuwad",
        "contribution_date":"19/2/2022",
        "content":`
The function calculates the sum of all the numbers in the given string.
- The function traverses through all the characters if the string.
- If the chracter is a number, the function adds its value to the result.
- Multiple consecutive numbers are considered as one number.
        `,
        "code":`# Sum of numbers in a string
def findSum(str1):
    temp = "0"
    Sum = 0
    for ch in str1:
        if (ch.isdigit()):
            temp += ch
        else:
            Sum += int(temp)
            temp = "0"
    return Sum + int(temp)
        `,
        "examples":`#examples
print(findSum("12ab20z40")) #72
print(findSum("120nb")) #120
print(findSum("1m2n2")) #5
        `
    }
]


export const tags=["string"]
