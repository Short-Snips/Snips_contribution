export const Articles = [
    {
        "uuid": "98879124-986e-4a08-887f-5e918e89a558",
        "title": "Sum of numbers in a string",
        "tags": ["String"],
        "language": "python",
        "short_intro": " Function calculates the sum of all the numbers in the given string",
        "contributor_name": "dinesh bhuwad",
        "contribution_date": "19/2/2022",
        "content": `
The function calculates the sum of all the numbers in the given string.
- The function traverses through all the characters if the string.
- If the chracter is a number, the function adds its value to the result.
- Multiple consecutive numbers are considered as one number.
        `,
        "code": `# Sum of numbers in a string
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
        "examples": `#examples
print(findSum("12ab20z40")) #72
print(findSum("120nb")) #120
print(findSum("1m2n2")) #5
        `
    }, {
        "uuid": "a7ce11fb-a603-405e-b79c-13b13c7ce694",
        "title": "Spiral Traversal of Matrix ",
        "tags": ["Matrix"],
        "language": "java",
        "short_intro": "Function prints the elements of the string in a spiral sequence",
        "contributor_name": "Dinesh Bhuwad",
        "contribution_date": "5/9/2022",
        "content": `
The function prints the elements of the string in a spiral sequence.
- It uses four pointers - right,left,top & bottom.
- If traverses in a clockwise direction.
        `,
        "code": `
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
        "examples": `#examples
        matrix[][] = {{1, 2, 3, 4},
        {5, 6, 7, 8},
        {9, 10, 11, 12},
        {13, 14, 15,16}} # 1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10

        matrix[][] = {{1, 2, 3, 4},
           {5, 6, 7, 8},
           {9, 10, 11, 12}} # 1 2 3 4 8 12 11 10 9 5 6 7


        `
    },
    {
        "uuid": "0f620672-b230-4c1b-8d60-74c1cc4dff21",
        "title": "Square root of number without using inbuilt function",
        "tags": ["Math"],
        "language": "java",
        "short_intro": " Function calculates the sum of all the numbers in the given string",
        "contributor_name": "Janak Avhad",
        "contribution_date": "19/2/2022",
        "content": `
        Given a non-negative integer x, compute and return the square root of x.

        Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.
        `,
        "code": `# Square root of number without using inbuilt function
        class Solution {
            public int mySqrt(int x) {
             if (x == 0 || x == 1) return x;
                int start=0;
                int end=x;
                while(start<=end){
                    int mid=start+(end-start)/2;
                    //long val=mid*mid;
                    if(mid == x / mid){
                        return mid;
                    }
                    else if(mid > x / mid){
                        end=mid-1;
                    }
                    else{
                        start=mid+1;
                    }
                }
                return end;
            }
        }
        `,
        "examples": `#examples
        Example 1:

        Input: x = 4
        Output: 2
        Example 2:
        
        Input: x = 8
        Output: 2
        Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.
        `
    },
    {
        "uuid": "0d2e68c9-9004-45ac-96d1-9c8865dd1ce4",
        "title": "Two Sum II - Input Array Is Sorted",
        "tags": ["Searching"],
        "language": "java",
        "short_intro": "Find two numbers such that they add up to a specific target number",
        "contributor_name": "Janak Avhad",
        "contribution_date": "19/2/2022",
        "content": `
        Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
        Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
        `,
        "code": `#  Two Sum II - Input Array Is Sorted
        class Solution {
            public int[] twoSum(int[] numbers, int target) {
                int start = 0, end = numbers.length-1;
                while(start<end){
                    if (numbers[start]+numbers[end]>target){
                        end--;
                    }
                    else if ((numbers[start]+numbers[end]<target)){
                        start++;
                    }
                    else{
                        break;
                    }
                }
                    
                return new int[]{start+1, end+1};
            }
        }
        `,
        "examples": `#examples
        Example 1:
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
Example 2:

Input: numbers = [2,3,4], target = 6
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
Example 3:

Input: numbers = [-1,0], target = -1
Output: [1,2]
Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].
        `
    },
    {
        "uuid": "d545798e-94f0-420b-a8ec-84a3ae57db2e",
        "title": "Arranging Coins",
        "tags": ["Searching"],
        "language": "java",
        "short_intro": "Given the integer n, return the number of complete rows of the staircase you will build.",
        "contributor_name": "Janak Avhad",
        "contribution_date": "19/2/2022",
        "content": `
        You have n coins and you want to build a staircase with these coins. 
        The staircase consists of k rows where the ith row has exactly i coins. 
        The last row of the staircase may be incomplete.
        `,
        "code": `# Arranging Coins
        class Solution {
            public int arrangeCoins(int n) {
                if (n < 0) {
                    throw new IllegalArgumentException("Input Number is invalid. Only positive numbers are allowed");
                }
                return (int) (Math.sqrt(2 * (long) n + 0.25) - 0.5);
            }
        }
        `,
        "examples": `#examples
        Input: n = 5
        Output: 2
        Explanation: Because the 3rd row is incomplete, we return 2.

        Input: n = 8
        Output: 3
        Explanation: Because the 4th row is incomplete, we return 3.
        `
    }


]


export const tags = ["string"]
