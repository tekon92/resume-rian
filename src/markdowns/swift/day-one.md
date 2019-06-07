# Day 1 | Simple Type
#### June 7, 2019


I always fancy to be a swift developer because of iOS ecosystem. that includes iOS, macOS, iPadOS, watchOS, etc.
especially on 2019 WWDC when they introduce [swiftUI](https://developer.apple.com/xcode/swiftui/), when you can easily create
your apps purely using swift easily.

so this time i will try to brush up again my swift skill that i almost forgoten.
using method `#100daysofswift` by [hacking with swift](https://www.hackingwithswift.com/100)

for the first day im learning about `Simple Type`.
1. variables
2. String and Integers
3. Multi-line Strings
4. Doubles and Booleans
5. String Interpolation
6. Constant
7. Type Annotations

and the summary are: 

1. you make variables using var and constant using let. it's preferable to use contants as often as possible.

```swift
var str = "Hello, playground"
let taylor = "swift"
```

2. string start and end with double quotes, but if you want them to run accross multiple lines you should use three sets of double quotes.

```swift
var str1 = """
this goes
over multiple
lines
"""
```

3. integers hold whole numbers, doubles hold fractional numbers and booleans hold true or false.

```swift
var age = 38
var pi = 3.14
var awesome = true
```

4. String interpolation allows you to create strings from other variables and constants, placing their values inside your string.
var score = 85
var str = "Your score was \(score)"
5.Swift uses type inference to assign each variable or constant a type, but you can provide explicit types if you want.

```swift
let album: String = "Reputation"
let year: Int = 1989
let height: Double = 1.78
let taylorRocks: Bool = true
```

hope i can finish this commitment for next 100 days and will let you know if a create my own swift apps.

### Useful Links
- [WWDC](https://wwdc.io)
- [swiftUI](https://developer.apple.com/xcode/swiftui/)
- [Hacking with Swift](https://www.hackingwithswift.com/100)