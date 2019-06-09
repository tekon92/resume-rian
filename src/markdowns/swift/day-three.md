# Day 3 | Operators and Conditions
#### June 9, 2019

Today i've learned about

1. Arithmetic Operators
2. Operator Overloading
3. Compound assigment operators
4. Comparison Operators
5. Conditions
6. Combining Conditions
7. Ternary Operator
8. Switch Statements
9. Range Operators

And the summaries are
1. Swift has operators for doing arithmetic and for comparison; they mostly work like you already know

```swift
let total = firstScore + secondScore
let difference = firstScore - secondScore
let product = firstScore * secondScore
let divided = firstScore / secondScore
```

2. There are compound variants of arithmetic operators that modify their variables in place: +=, -=, and so on.

```swift
var score = 95
score -= 5
```

3. You can use `if`, `else` and `else if` to run code based on the result of a condition.

```swift
if firstCard + secondCard == 21 {
  print("Blackjack!")
} else {
  print("Regular cards")
}
```

4. Swift has a ternary operator that combines a check with true and false code block. 

```swift
let firstCard = 11
let secondCard = 10

print(firstCard == secondCard ? "Cards are the same" : "Cards are different")
```
5. if you have multiple conditions using the same value, it's often clearer to use `switch` instead.

```swift
switch weather {
  case "rain":
    print("Bring an umbrella")
  case "sunny":
    print("wear sunscreen")
  default:
    print("Enjoy your day!")
}
```

6. you can make ranges using `..<` and `...` depending on wheter the last number should be executed or included.

```swift
switch score {
  case 0..<50:
    print("You failed badly.")
  case 50..<85:
    print("You did OK.")
  default:
    print("You did great!")
}
```

that's all folks for today, so far, quite the same with any other languages.
see you tomorrow.

### Useful Links
- [Hacking with Swift](https://www.hackingwithswift.com/100/3)