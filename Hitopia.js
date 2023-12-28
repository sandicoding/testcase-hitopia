function weightedUniformStrings(s, queries) {

    // ** Initialize variables
    let result = [];
    let weight = 0;
    let prev = '';
    let map = {};

    // ** Loop through string
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== prev) {
            weight = s.charCodeAt(i) - 96;
        } else {
            weight += s.charCodeAt(i) - 96;
        }
        map[weight] = true;
        prev = s[i];
    }

    // ** Loop through queries 
    for (let i = 0; i < queries.length; i++) {
        if (map[queries[i]]) {
            result.push('Yes');
        } else {
            result.push('No');
        }
    }

    // ** Return result
    return result;
}

// ** Console.log test
console.log(weightedUniformStrings('abbcccd', [1, 3, 9, 8])); // ['Yes', 'Yes', 'Yes', 'No'] 


function HighestPalindromeWithRekursif(str, k) {
    // ** Initialize variables
    let result = '';
    let arr = str.split('');
    let arrLength = arr.length;

    // ** Loop through array
    for (let i = 0; i < arrLength; i++) {
        if (arr[i] !== arr[arrLength - 1 - i]) {
            if (k > 0) {
                arr[arrLength - 1 - i] = arr[i];
                k--;
            } else {
                return -1;
            }
        }
    }

    // ** Loop through array
    for (let i = 0; i < arrLength; i++) {
        if (arr[i] !== arr[arrLength - 1 - i]) {
            if (arr[i] > arr[arrLength - 1 - i]) {
                arr[arrLength - 1 - i] = arr[i];
            } else {
                arr[i] = arr[arrLength - 1 - i];
            }
        }
    }

    // ** Return result
    return arr.join('');
}

console.log(HighestPalindromeWithRekursif('3943', 1)); // expected output '3993'


function BalancedBracket(str) {
    // ** Initialize variables
    let stack = [];
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    // ** Loop through string
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(' || str[i] === '[' || str[i] === '{') {
            stack.push(str[i]);
        } else {
            let last = stack.pop();

            if (str[i] !== map[last]) {
                return 'NO';
            }
        }
    }

    // ** Return result
    if (stack.length !== 0) {
        return 'NO';
    } else {
        return 'YES';
    }
}

// ** Sample 1 balanced bracket
console.log(BalancedBracket('{[()]}')); // expected output 'YES'

// ** Sample 2 unbalanced bracket
console.log(BalancedBracket('{[(])}')); // expected output 'NO'

// ** Sample 3 balanced bracket
console.log(BalancedBracket('{(([])[])[]}')); // expected output 'YES'