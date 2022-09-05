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
    },{
        "uuid":"a7ce11fb-a603-405e-b79c-13b13c7ce694",
        "title": "Spiral Traversal of Matrix ",
        "tags": ["Matrix"],
        "language":"java",
        "short_intro":"Function prints the elements of the string in a spiral sequence",
        "contributor_name":"Dinesh Bhuwad",
        "contribution_date":"5/9/2022",
        "content":`
The function prints the elements of the string in a spiral sequence.
- It uses four pointers - right,left,top & bottom.
- If traverses in a clockwise direction.
        `,
        "code":`
static ArrayList<Integer> spirallyTraverse(int matrix[][], int r, int c)
        {
            int top,bottom,left,right,i;
            top=0;
            bottom=r-1;
            left=0;
            right=c-1;
            int div = 0;
            
            ArrayList<Integer> a = new ArrayList<>();
            
            while(top<=bottom && left<=right){
                if(div==0){
                    for(i=left; i<=right; i++){
                        a.add(matrix[top][i]);
                    }
                    top=top+1;
                }
                if(div==1){
                    for(i=top; i<=bottom; i++){
                        a.add(matrix[i][right]);
                    }
                    right=right-1;
                }
                if(div==2){
                    for(i=right; i>=left; i--){
                        a.add(matrix[bottom][i]);
                    }
                    bottom=bottom-1;
                }
                if(div==3){
                    for(i=bottom; i>=top; i--){
                        a.add(matrix[i][left]);
                    }
                    left=left+1;
                }
                div = (div+1)%4;
                
            }
            
            return a;
        }
        `,
        "examples":`#examples
        matrix[][] = {{1, 2, 3, 4},
        {5, 6, 7, 8},
        {9, 10, 11, 12},
        {13, 14, 15,16}} # 1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10

        matrix[][] = {{1, 2, 3, 4},
           {5, 6, 7, 8},
           {9, 10, 11, 12}} # 1 2 3 4 8 12 11 10 9 5 6 7


        `
    }

]


export const tags=["string"]
