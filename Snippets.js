export const Articles=[
    {
        "uuid":"98879124-986e-4a08-887f-5e918e89a558",
        "title": "Sum of numbers in a string",
        "tags": ["string"],
        "language":"python",
        "content":`
        Explain briefly what the snippet does.
        - Explain briefly how the snippet works.
        - Use bullet points for your snippet's explanation.
        - Try to explain everything briefly but clearly.
        `,
        "code":`
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
        "exaples":`
print(findSum("12ab20z40")) #72
print(findSum("120nb")) #120
print(findSum("1m2n2")) #5
        `
    }
]


export const tags=["string"]
