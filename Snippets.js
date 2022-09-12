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
                      {13, 14, 15,16}}
         # 1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10

        matrix[][] = {{1, 2, 3, 4},
                      {5, 6, 7, 8},
                      {9, 10, 11, 12}} 
        # 1 2 3 4 8 12 11 10 9 5 6 7


        `

    },{
        "uuid":"08a729df-9b1f-4572-94cf-fb918fd2a557",
        "title": "Search a 2D Matrix",
        "tags": ["Matrix"],
        "language":"java",
        "short_intro":"Function searchs for a number in the given integer matrix",
        "contributor_name":"dinesh bhuwad",
        "contribution_date":"5/9/2022",
        "content":`
The function searchs for a number in the given integer matrix.
- The function returns a boolean true if the number is present and false if the value is not present.
        `,
        "code":`# Searching an element in the matrix
        public boolean searchMatrix(int[][] matrix, int target) {
            for(int i=0;i<matrix.length;i++){
                if(matrix[i][0]>target) return false;
                for(int j=0;j<matrix[i].length;j++){
                    if(matrix[i][j]==target) return true;
                    if(matrix[i][j]>target) return false;
                }
            }
             return false;
        }
        `,
        "examples":`#examples
        matrix = [[1,3,5,7],
                  [10,11,16,20],
                  [23,30,34,60]], 
        target = 3 
        # true 

        matrix = [[1,3,5,7],
                  [10,11,16,20],
                  [23,30,34,60]], 
        target = 13
        # false
        `
    },{
        "uuid":"641b5f3f-9cc0-4b02-b914-21dff4f1bcf7",
        "title": "Median in a row-wise sorted Matrix",
        "tags": ["Matrix"],
        "language":"java",
        "short_intro":" Function returns the median for the row wise sorted matrix",
        "contributor_name":"dinesh bhuwad",
        "contribution_date":"5/9/2022",
        "content":`
The function returns the median for the row wise sorted matrix.
- Given a row wise sorted matrix of size RxC where R and C are always odd, the function returns  the median of the matrix.
        `,
        "code":`# Median in a row-wise sorted Matrix
        int median(int matrix[][], int r, int c) {
            ArrayList<Integer>b = new ArrayList<>();
             for(int i = 0; i < r ;i++){
               for(int j = 0; j < c;j++){
                   b.add(matrix[i][j]);
                   
               }
               
           }
           
           Collections.sort(b);
           int a = b.size()/2;
           
           return b.get(a);
        }
        `,
        "examples":`#examples
        R = 3, C = 3
        M = [[1, 3, 5], 
             [2, 6, 9], 
             [3, 6, 9]]
        # 5

        R = 3, C = 1
        M = [[1], [2], [3]]
        # 2`
    },
    {
        "uuid":"0f620672-b230-4c1b-8d60-74c1cc4dff21",
        "title": "Square root of number without using inbuilt function",
        "tags": ["Math"],
        "language":"java",
        "short_intro":" Function calculates the sum of all the numbers in the given string",
        "contributor_name":"Janak Avhad",
        "contribution_date":"19/2/2022",
        "content":`
        Given a non-negative integer x, compute and return the square root of x.

        Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.
        `,
        "code":`# Square root of number without using inbuilt function
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
        "examples":`#examples
        Example 1:

        Input: x = 4
        Output: 2
        Example 2:
        
        Input: x = 8
        Output: 2
        Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.
        `
    },{
        "uuid":"da9c607e-98e7-4f96-b892-dca06dba10d9",
        "title": "Reverse a LinkedList ",
        "tags": ["linkedlist"],
        "language":"java",
        "short_intro":" The given function reverses the given linkedlist",
        "contributor_name":"dinesh bhuwad",
        "contribution_date":"7/9/2022",
        "content":`
    The function reverses the given linkedlist.
    - The time complexity of the function is O(N).
    - The space complexity of the function is O(1).
        `,
        "code":`
        Node reverse(Node node)
        {
            Node prev = null;
            Node current = node;
            Node next = null;
            while (current != null) {
                next = current.next;
                current.next = prev;
                prev = current;
                current = next;
            }
            node = prev;
            return node;

            while (node != null) {
                System.out.print(node.data + " ");
                node = node.next;
            }
        }
        `,
        "examples":`#examples
        Input : 1->2->3->4->NULL
        Output : 4->3->2->1->NULL
        
        Input: 1->2->3->4->5->NULL 
        Output: 5->4->3->2->1->NULL
        
        `

    },{
        "uuid":"6da2db53-d0a4-48b8-b0c1-7e1d2b83d0b6",
        "title": "Detect loops in a given linkedlist",
        "tags": ["Linkedlist"],
        "language":"java",
        "short_intro":" Function calculates the sum of all the numbers in the given string",
        "contributor_name":"dinesh bhuwad",
        "contribution_date":"7/9/2022",
        "content":`
The function returns a boolean value after checking if loop is present in the linkedlist.
- The time complexity of the function is O(N).
- The space complexity of the function is O(1).
        `,
        "code":`
        public static boolean detectLoop(Node head){
        
            Node slow = head;
            Node fast = head;
            
            while(fast.next != null && fast.next.next != null){
                slow = slow.next;
                fast = fast.next.next;
                if(slow == fast){
                    return true;
                }
            }
            
            return false;
         }
        `,
        "examples":`#examples
        N = 3
        value[] = {1,3,4}
        x(position at which tail is connected) = 2
        Output: True
        Explanation: In above test case N = 3.
        The linked list with nodes N = 3 is
        given. Then value of x=2 is given which
        means last node is connected with xth
        node of linked list. Therefore, there
        exists a loop.
        `
    },{
        "uuid":"6da2db23-d0a4-48b8-b0c1-7e1d2b83d0b6",
        "title": "tlc",
        "tags": ["Linkedlist"],
        "language":"java",
        "short_intro":"example tvlc",
        "contributor_name":"adarsh",
        "contribution_date":"7/9/2022",
        "content":`
The function returns a boolean value after checking if loop is present in the linkedlist.
- The time complexity of the function is O(N).
- The space complexity of the function is O(1).
        `,
        "code":`
        public static boolean detectLoop(Node head){
        
            Node slow = head;
            Node fast = head;
            
            while(fast.next != null && fast.next.next != null){
                slow = slow.next;
                fast = fast.next.next;
                if(slow == fast){
                    return true;
                }
            }
            
            return false;
         }
        `,
        "examples":`#examples
        N = 3
        value[] = {1,3,4}
        x(position at which tail is connected) = 2
        Output: True
        Explanation: In above test case N = 3.
        The linked list with nodes N = 3 is
        given. Then value of x=2 is given which
        means last node is connected with xth
        node of linked list. Therefore, there
        exists a loop.
        `
    }
    

]


export const tags=["string"]
