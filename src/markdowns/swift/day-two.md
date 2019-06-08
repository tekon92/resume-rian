# Day 2 | Complex Type
#### June 8, 2019

Today i learned about, Complex Data Type

1. Array
2. Sets
3. Tuples
4. Dictionaries
5. Enumerations

and the summaries are:

1.Array, sets, tuples and dictionaries let you store a group if items under a single value. they each do this in different ways, so which you use depends on the behavior you want.
2. Array store items in the order you add them, and you access them using numerical positions.
3. Sets store items without any order you add them, and you access them using numerical positions.
4. Tuples are fixed in size, and you can attach names to each of their items. you can read items using numerical positions or using your name.
5. Dictionaries atore items according to a key, and you read ites using those keys.
6. Enums are a way of grouping related values so you can use them without spelling mistakes.
7. You can attach raw values to enums so the can be created from integers or strings, or you can add associated values to store additional about each case.
8. Array, sets, and tuples can seem similiar at first, but they have distinc uses.
  a. if you need a specific, fixed collections of related values where each items has a precise position or name, you should use tuple:
  
  ```swift
  let address = (house: 555, street: "Taylor Swift Avenue", city: "Nashville")
  ```
  b. if you need a collection of values that must be uniques or you need to be able to check whether a specific item is in there extremely quickly, you should use a set

```swift
let set = Set(["aardvark", "astronaut", "azalea"])
```
  c. if you need a collection of values that can containe duplicates or the order of your items matters, you should use array.

```swift
let pythons = ["Eric", "Graham", "John", "Michael", "Terry", "Terry"]
```

  d. if you need a collection of values just like arrays, but rather than storing things with an integer position you can access them using anything you want.

  ```swift
  let heights = [
      "Taylor Swift": 1.78,
      "Ed Sheeran": 1.73
  ]
  heights["Taylor Swift"]
  ```

  e.are a way of defining groups of related values in a way that makes them easier to use.This stops you from accidentally using different strings each time.

  ```swift
enum Result {
    case success
    case failure
}

let result4 = Result.failure
  ``` 

9. creating empty collection
  a. Dictionaries
  ```swift
  var teams = [String: String]()
  var scores = Dictionaries<String, Int>()
  ```

  b. Array
  ```swift
  var results = [Int]()
  var results = Array<Int>()
  ```

  c. Set
  ```swift
  var words = Set<String>()
  var numbers = Set<Int>()
  ```
that's all folks for today, see you tomorrow.

PS: anyway im creating twitter user interface using NUXT. you can find it here([git](https://github.com/tekon92/nuxt-twitter)) and live([netlify](https://xenodochial-aryabhata-bac2b6.netlify.com/)). this still under progress and you might find some bugs (psst: dont hesitate to let me know if you find any.)


### Useful Links
- [Hacking with Swift](https://www.hackingwithswift.com/100)
- [git](https://github.com/tekon92/nuxt-twitter)
- [netlify](https://xenodochial-aryabhata-bac2b6.netlify.com/)