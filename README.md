# DSA-Arrays

### What is the length, capacity and memory address of your array?
- for arr.push(3)
    > length: 1, _capacity: 0, ptr: 0

- for all pushes
    > length: 6, _capacity: 0, ptr: 15

### Explain the result of your program after adding the new lines of code.
Seems to show the length of the array as well as the total space allocated (ptr). The _capacity is unchanged as it was never used.

the ptr is the sum of the oldPtr and the array length

### What is the length, capacity, and address of your array?
length: 3, _capacity: 0, ptr: 15

### Explain the result of your program after adding the new lines of code.
The array length decreased to 3 and values removed. The allocated space has stayed the same.

### Print the 1st item in the array arr
Its 0. After printing out the entire array it seems that very few values are something other than 0 and they don't seem to correspond to the values pushed in.

### Empty the array and add just 1 item: arr.push("tauhida");
length: 1, _capacity: 0, ptr: 0
Looks like the array has one value but no allocated space?
Not sure of the signifigance but if you muliply the org length and the new length, you get the ptr.

### What is the purpose of the _resize() function in your Array class?
I'm not sure. From what I can see it is determining whether or not there is space available but beyond that I'm not certain. It seems to be clearing the oldPtr space but keeping a record of the oldPtr along with the current ptr and the current length in the copy method.