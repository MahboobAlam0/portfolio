export const blogsData = [
    {
        id: "array-interview-questions",
        title: "Array Interview Questions: Patterns, Approaches & Kadane's Algorithm",
        date: "May 7, 2025",
        summary: "Interview-focused array problem-solving — kth largest/smallest, find the pivot element, and maximum sum subarray with brute force through Kadane's Algorithm. With credit to CampusX.",
        content: `
            <p style="padding: 0.75rem 1rem; background: var(--secondary-bg); border-left: 3px solid var(--accent-color); border-radius: 4px; font-size: 0.9rem;">
                Notes based on the <strong>CampusX</strong> Array Interview Questions session. Full credit to <strong>Nitish Singh (CampusX)</strong> for the problem selection, approaches, and intuition building. Highly recommended channel for DS/ML in Python.
            </p>

            <hr style="margin: 2rem 0; border: none; border-top: 1px solid var(--card-border);" />

            <h3>Points to Remember for Array Interviews</h3>
            <ul>
                <li>Questions asked in Data roles are <strong>relatively easier</strong> than SDE roles — focus is on correctness and clarity</li>
                <li><strong>Pythonic syntax is preferred</strong> — use list comprehensions, slicing, built-ins over verbose loops</li>
                <li>Always <strong>start with the brute force</strong> solution, state its complexity, then optimise</li>
                <li>A lot of questions repeat — <strong>learn the pattern</strong>, not just the answer</li>
                <li>Build intuition by tracing code on <strong>Python Tutor</strong> (pythontutor.com)</li>
            </ul>

            <hr style="margin: 2rem 0; border: none; border-top: 1px solid var(--card-border);" />

            <h3>Q1. Find the Kth Largest / Smallest Element</h3>
            <pre><code>
L = [12, 23, 1, 4, 56, 34, 22, 3]

# Kth largest — sort descending, pick index k-1
k = 2
sorted(L, reverse=True)[k - 1]    # 34

# Kth smallest — sort ascending, pick index k-1
sorted(L)[k - 1]                   # 3
            </code></pre>
            <p><strong>Time complexity:</strong> O(n log n) due to sorting. For large n, use <code>heapq.nlargest(k, L)</code> or <code>heapq.nsmallest(k, L)</code> which are O(n log k).</p>
            <pre><code>
import heapq
heapq.nlargest(2, L)[-1]    # 2nd largest → 34
heapq.nsmallest(2, L)[-1]   # 2nd smallest → 3
            </code></pre>

            <hr style="margin: 2rem 0; border: none; border-top: 1px solid var(--card-border);" />

            <h3>Q9. Find Element Where Left Side is Smaller and Right Side is Greater</h3>
            <p>Given an array, find all elements such that every element to its <strong>left is smaller</strong> and every element to its <strong>right is greater</strong>. Skip the first and last elements.</p>
            <pre><code>
L = [3, 1, 2, 5, 8, 7, 9]
# Expected output: 5
# Because: max(left of 5) = 3 < 5 < min(right of 5) = 7
            </code></pre>

            <h3>Approach 1 — Brute Force O(n²)</h3>
            <p>For every element, scan all elements to its left (check all are smaller) and all to its right (check all are greater). Use a flag to track validity.</p>
            <pre><code>
L = [3, 1, 2, 5, 8, 7, 9]

for i in range(1, len(L) - 1):    # skip first and last
    flag = True

    for j in range(0, i):          # check left side
        if L[j] > L[i]:
            flag = False

    for k in range(i + 1, len(L)): # check right side
        if L[k] < L[i]:
            flag = False

    if flag:
        print(L[i])

# Output: 5
            </code></pre>
            <p><strong>Time: O(n²)</strong> — two nested loops per element.</p>

            <h3>Approach 2 — Pythonic O(n²)</h3>
            <p>Same logic, but use <code>max()</code> and <code>min()</code> with slicing for cleaner code. Still O(n²) because <code>max</code> and <code>min</code> each scan a subarray.</p>
            <pre><code>
L = [3, 1, 2, 5, 8, 7, 9]

for i in range(1, len(L) - 1):
    if max(L[:i]) < L[i] < min(L[i+1:]):
        print(L[i])

# Output: 5
            </code></pre>

            <h3>Approach 3 — Optimized O(n) using Prefix Max & Suffix Min Arrays</h3>
            <p>The key insight: precompute a <strong>running maximum from the left</strong> and a <strong>running minimum from the right</strong>, then check the condition in a single pass.</p>
            <pre><code>
# Visualising the precomputed arrays for L = [3,1,2,5,8,7,9]:
#
# Original:  | 3 | 1 | 2 | 5 | 8 | 7 | 9 |
# max_arr:   | 3 | 3 | 3 | 5 | 8 | 8 | 9 |  (running max left→right)
# min_arr:   | 1 | 1 | 2 | 5 | 7 | 7 | 9 |  (running min right→left)
#
# For index i, check: max_arr[i-1] < L[i] < min_arr[i+1]
# i=1: max_arr[0]=3 < L[1]=1  → False
# i=2: max_arr[1]=3 < L[2]=2  → False
# i=3: max_arr[2]=3 < L[3]=5 < min_arr[4]=7 → True ✓
# i=4: max_arr[3]=5 < L[4]=8 < min_arr[5]=7 → False
# i=5: max_arr[4]=8 < L[5]=7  → False

L = [3, 1, 2, 5, 8, 7, 9]

# Build prefix max array (left → right)
max_arr = []
max_value = L[0]
for i in L:
    if i > max_value:
        max_value = i
    max_arr.append(max_value)

# Build suffix min array (right → left)
min_arr = []
min_val = L[-1]
for i in range(len(L) - 1, -1, -1):
    if L[i] < min_val:
        min_val = L[i]
    min_arr.insert(0, min_val)

# Single pass check (skip first and last indices)
for i in range(1, len(L) - 1):
    if max_arr[i - 1] < L[i] < min_arr[i + 1]:
        print(L[i])

# Output: 5
            </code></pre>
            <p><strong>Time: O(n)</strong> — three separate single passes. <strong>Space: O(n)</strong> for the two auxiliary arrays.</p>

            <hr style="margin: 2rem 0; border: none; border-top: 1px solid var(--card-border);" />

            <h3>Q10. Maximum Sum Subarray</h3>
            <p>Find the contiguous subarray with the largest sum.</p>
            <pre><code>
L = [-2, 4, 7, -1, 6, -11, 14, 3, -1, -6]
# Expected: sum = 22, subarray = [4, 7, -1, 6, -11, 14, 3, -1, -6]
            </code></pre>

            <h3>Approach 1 — Brute Force O(n²)</h3>
            <p>Generate every possible subarray, compute its sum, store in a dictionary, then pick the maximum key.</p>
            <pre><code>
L = [-2, 4, 7, -1, 6, -11, 14, 3, -1, -6]
dic = {}

for i in range(len(L)):
    subarray = []
    for j in range(i, len(L)):
        subarray.append(L[j])
        dic[sum(subarray)] = subarray   # key = sum, value = subarray

max_val = max(dic.keys())
print(max_val)      # 22
for k in dic:
    if k == max_val:
        print(dic[k])   # [4, 7, -1, 6, -11, 14, 3, -1, -6]
            </code></pre>
            <p><strong>Time: O(n²)</strong> — nested loops generating all subarrays. <strong>Limitation:</strong> if two different subarrays have the same sum, the dictionary only keeps the last one.</p>

            <h3>Approach 2 — Kadane's Algorithm O(n)</h3>
            <p>The key idea: at each element, decide whether to <strong>extend the current subarray</strong> or <strong>start fresh</strong> from this element. If adding the current element to the running sum improves it (i.e., <code>curr_sum + element > element</code> alone), keep extending. Otherwise, reset.</p>
            <pre><code>
L = [-2, 4, 7, -1, 6, -11, 14, 3, -1, -6]

curr_sum = 0
curr_seq = []
best_sum = L[0]    # initialise to first element (handles all-negative arrays)
best_seq = []

for i in L:
    if i + curr_sum > i:        # extending is better than starting fresh
        curr_sum += i
        curr_seq.append(i)
    else:                        # starting fresh is better
        curr_sum = i
        curr_seq.clear()
        curr_seq.append(i)

    if curr_sum > best_sum:      # update best seen so far
        best_sum = curr_sum
        best_seq = curr_seq[:]   # snapshot of current sequence

print(best_sum, best_seq)
# 22  [4, 7, -1, 6, -11, 14, 3, -1, -6]
            </code></pre>
            <p><strong>Time: O(n)</strong> — single pass. <strong>Space: O(1)</strong> extra (ignoring the output sequence). This is the standard interview answer.</p>

            <h3>Kadane's Algorithm — Step-by-Step Trace</h3>
            <pre><code>
# L = [-2, 4, 7, -1, 6, -11, 14, 3, -1, -6]
#
# i=-2:  0 + (-2) = -2 < -2 alone? No  → reset  curr=-2  best=-2
# i=4:   -2 + 4   =  2 < 4  alone? No  → reset  curr=4   best=4
# i=7:   4 + 7    = 11 > 7  alone? Yes → extend curr=11  best=11
# i=-1:  11 + (-1)= 10 > -1 alone? Yes → extend curr=10  best=11
# i=6:   10 + 6   = 16 > 6  alone? Yes → extend curr=16  best=16
# i=-11: 16 + (-11)= 5 > -11 alone? Yes → extend curr=5  best=16
# i=14:  5 + 14   = 19 > 14 alone? Yes → extend curr=19  best=19
# i=3:   19 + 3   = 22 > 3  alone? Yes → extend curr=22  best=22
# i=-1:  22 + (-1)= 21 > -1 alone? Yes → extend curr=21  best=22
# i=-6:  21 + (-6)= 15 > -6 alone? Yes → extend curr=15  best=22
#
# Final best_sum = 22
            </code></pre>

            <h3>Complexity Comparison</h3>
            <div style="overflow-x:auto;">
                <table style="width:100%; border-collapse:collapse; font-size:0.9rem; margin-top:0.5rem;">
                    <thead>
                        <tr style="background:var(--secondary-bg);">
                            <th style="padding:0.6rem 1rem; text-align:left; border:1px solid var(--card-border);">Problem</th>
                            <th style="padding:0.6rem 1rem; text-align:left; border:1px solid var(--card-border);">Brute Force</th>
                            <th style="padding:0.6rem 1rem; text-align:left; border:1px solid var(--card-border);">Optimised</th>
                            <th style="padding:0.6rem 1rem; text-align:left; border:1px solid var(--card-border);">Technique</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding:0.6rem 1rem; border:1px solid var(--card-border);">Kth Largest / Smallest</td>
                            <td style="padding:0.6rem 1rem; border:1px solid var(--card-border);">O(n log n)</td>
                            <td style="padding:0.6rem 1rem; border:1px solid var(--card-border);">O(n log k)</td>
                            <td style="padding:0.6rem 1rem; border:1px solid var(--card-border);">heapq</td>
                        </tr>
                        <tr style="background:var(--secondary-bg);">
                            <td style="padding:0.6rem 1rem; border:1px solid var(--card-border);">Pivot element (left&lt;x&lt;right)</td>
                            <td style="padding:0.6rem 1rem; border:1px solid var(--card-border);">O(n²)</td>
                            <td style="padding:0.6rem 1rem; border:1px solid var(--card-border);">O(n)</td>
                            <td style="padding:0.6rem 1rem; border:1px solid var(--card-border);">Prefix max + Suffix min</td>
                        </tr>
                        <tr>
                            <td style="padding:0.6rem 1rem; border:1px solid var(--card-border);">Maximum sum subarray</td>
                            <td style="padding:0.6rem 1rem; border:1px solid var(--card-border);">O(n²)</td>
                            <td style="padding:0.6rem 1rem; border:1px solid var(--card-border);">O(n)</td>
                            <td style="padding:0.6rem 1rem; border:1px solid var(--card-border);">Kadane's Algorithm</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p style="margin-top:2rem; font-size:0.85rem; color:var(--text-secondary);">
                Credit: <strong>CampusX — Nitish Singh</strong>. These problems and approaches are from the CampusX Array Interview Questions session. If you found this useful, check out the full CampusX playlist on YouTube.
            </p>
        `,
        tags: ["Python", "Arrays", "Interview", "Kadane's Algorithm", "DSA"]
    },
    {
        id: "python-functions",
        title: "Python Functions: Complete Notes with Code",
        date: "May 6, 2025",
        summary: "Everything about Python Functions — definition, arguments, *args/**kwargs, scope, nested functions, first-class citizens, lambda, higher-order functions, map, filter, and reduce.",
        content: `
            <p>Complete notes on Python Functions — from the basics of defining a function all the way to higher-order functions, lambda expressions, and the functional programming tools built into Python.</p>

            <hr style="margin: 2rem 0; border: none; border-top: 1px solid var(--card-border);" />

            <h3>1. What is a Function?</h3>
            <p>A function is a block of code that <strong>only runs when called</strong>. It can accept data as input (parameters) and return data as output. Key benefits:</p>
            <ul>
                <li><strong>Avoids code repetition</strong> — write once, call many times</li>
                <li><strong>Abstraction</strong> — hide implementation details; callers only see the interface</li>
                <strong>Decomposition</strong> — break complex problems into small, named pieces</li>
            </ul>
            <pre><code>
# Syntax
def function_name(parameters):
    # logic
    return value

function_name()   # calling the function
            </code></pre>

            <h3>2. Creating a Function (with Docstring)</h3>
            <p>A <strong>docstring</strong> is a string literal immediately after the <code>def</code> line. It documents what the function does and is accessible via <code>function.__doc__</code>.</p>
            <pre><code>
def is_even(n):
    """
    Returns whether a given number is odd or even.
    input  - any valid integer
    output - 'even' or 'odd'
    """
    if type(n) is int:
        if n % 2 == 0:
            return 'even'
        else:
            return 'odd'
    else:
        return 'not a valid integer'

for i in range(1, 11):
    print(is_even(i))
# odd even odd even odd even odd even odd even

# Non-integer input
is_even('hello')    # 'not a valid integer'

# Access the docstring
print(is_even.__doc__)
            </code></pre>

            <h3>3. Parameters vs Arguments</h3>
            <ul>
                <li><strong>Parameter</strong> — the variable listed in the function definition: <code>def power(a, b)</code> → <code>a</code> and <code>b</code> are parameters</li>
                <li><strong>Argument</strong> — the actual value passed when calling the function: <code>power(2, 3)</code> → <code>2</code> and <code>3</code> are arguments</li>
            </ul>

            <h3>4. Types of Arguments</h3>
            <pre><code>
def power(a=1, b=1):    # a=1, b=1 are DEFAULT arguments
    return a ** b

# Default argument — uses default if not provided
power()       # 1  (1**1)
power(2, 2)   # 4

# Positional argument — matched by order
power(2, 3)   # 8  (a=2, b=3)

# Keyword argument — matched by name, order doesn't matter
power(b=3, a=2)   # 8  (a=2, b=3)
# Keyword arguments are preferred — they make call sites readable
            </code></pre>

            <h3>5. *args and **kwargs</h3>
            <p>Used when the <strong>number of arguments is unknown</strong> at definition time.</p>
            <pre><code>
# *args — variable number of POSITIONAL arguments
# Python packs them into a TUPLE inside the function
def multiply(*args):
    product = 1
    for i in args:
        product *= i
    print(args)       # (3, 4, 5, 6, 7)  — it's a tuple
    return product

multiply(3, 4, 5, 6, 7)   # 2520

# **kwargs — variable number of KEYWORD arguments
# Python packs them into a DICT inside the function
def display(**kwargs):
    for key, value in kwargs.items():
        print(key, '-', value)

display(india='Delhi', srilanka='Colombo', nepal='Kathmandu')
# india - Delhi
# srilanka - Colombo
# nepal - Kathmandu
            </code></pre>
            <p><strong>Rules:</strong> argument order must be <code>normal args → *args → **kwargs</code>. The names "args" and "kwargs" are just convention — you can use any names.</p>

            <h3>6. How Functions Execute in Memory</h3>
            <p>When a function is called, Python creates a <strong>stack frame</strong> for it in memory. All local variables and the function itself live in that frame. Once the function returns, the frame is destroyed — all local state is gone.</p>
            <pre><code>
# The life of a function in memory:
# call → execute → return → frame destroyed
            </code></pre>

            <h3>7. Without a Return Statement</h3>
            <p>If a function has no <code>return</code>, it implicitly returns <code>None</code>. Many built-in methods (like <code>list.append</code>) work this way.</p>
            <pre><code>
L = [1, 2, 3]
print(L.append(4))   # None  — append modifies L but returns nothing
print(L)             # [1, 2, 3, 4]
            </code></pre>

            <h3>8. Variable Scope</h3>
            <p>Python uses <strong>LEGB</strong> scope order: Local → Enclosing → Global → Built-in.</p>
            <pre><code>
# A function CAN READ a global variable
def g(y):
    print(x)      # reads global x
    print(x + 1)

x = 5
g(x)     # prints 5, then 6
print(x) # still 5 — g() didn't modify it

# A function creates its OWN local x — does NOT affect global x
def f(y):
    x = 1      # NEW local x, shadow of global x
    x += 1
    print(x)   # 2

x = 5
f(x)
print(x)   # still 5

# Trying to modify global x WITHOUT global keyword → UnboundLocalError
def f(y):
    x += 1     # Python sees x on left side → treats as local
    print(x)   # but x has no local value yet → ERROR

# x = 5; f(x)  →  UnboundLocalError: cannot access local variable 'x'

# Fix: use the global keyword
def f(y):
    global x
    x += 1
    print(x)

x = 5
f(x)     # 6
print(x) # 6  — global x was actually modified

# Parameters are local copies — changing them doesn't affect caller
def f(x):
    x = x + 1
    print('in f(x): x =', x)
    return x

x = 3
z = f(x)
print('main: z =', z)   # 4
print('main: x =', x)   # 3  — original unchanged
            </code></pre>

            <h3>9. Nested Functions</h3>
            <p>Functions can be defined inside other functions. The inner function has access to the enclosing function's variables (closure scope).</p>
            <pre><code>
# Simple nested function
def g(x):
    def h():
        x = 'abc'   # local to h, does NOT affect g's x
    x = x + 1
    print('in g(x): x =', x)
    h()
    return x

x = 3
z = g(x)    # in g(x): x = 4

# Inner function receiving a parameter
def g(x):
    def h(x):
        x = x + 1
        print('in h(x): x =', x)
    x = x + 1
    print('in g(x): x =', x)
    h(x)
    return x

x = 3
z = g(x)
print('main: x =', x)   # 3
print('main: z =', z)   # 4
# in g(x): x = 4
# in h(x): x = 5  — h gets its own copy
            </code></pre>
            <p><strong>Recursion error with nested functions:</strong> If the inner function calls the outer AND the outer calls the inner in a cycle, Python hits its recursion limit and throws <code>RecursionError: maximum recursion depth exceeded</code>. Always ensure a base case exists when functions call each other.</p>

            <h3>10. Functions are First-Class Citizens</h3>
            <p>In Python, a function is just an object — it has a <code>type</code> and an <code>id</code>, and it supports every operation any other object supports: assigned to variables, stored in lists/sets, passed as arguments, returned from other functions, deleted.</p>
            <pre><code>
def square(num):
    return num ** 2

print(type(square))     # &lt;class 'function'&gt;
print(id(square))       # memory address

# Reassign a function to a variable
x = square
x(3)    # 9  — calling through the alias

# Delete a function
del square
# square(3)  →  NameError: name 'square' is not defined

# Store a function in a list
def square(num): return num ** 2
L = [1, 2, 3, square]
L[-1](2)    # 4

# Store in a set (functions are immutable/hashable)
s = {square}

# Return a function from a function
def f():
    def x(a, b):
        return a + b
    return x        # returning the function object, not calling it

val = f()(3, 4)     # f() returns x, then x(3,4) is called
print(val)          # 7

# Pass a function as an argument (Higher Order Function)
def func_a():
    print('inside func_a')

def func_b(z):
    print('inside func_b')
    return z()      # calling the function passed in

func_b(func_a)
# inside func_b
# inside func_a
            </code></pre>

            <h3>11. Benefits of Functions</h3>
            <ul>
                <li><strong>Code Modularity</strong> — each function does one thing</li>
                <li><strong>Code Readability</strong> — named functions express intent</li>
                <li><strong>Code Reusability</strong> — write once, call from anywhere</li>
            </ul>

            <h3>12. Lambda Functions</h3>
            <p>A <strong>lambda</strong> is a small, anonymous, single-expression function. It returns the value of its expression automatically.</p>
            <p>Syntax: <code>lambda parameters: expression</code></p>
            <pre><code>
# x → x²
a = lambda x: x ** 2
a(3)    # 9

# x, y → x + y
b = lambda x, y: x + y
b(5, 3)    # 8

# Check if string contains 'a'
a = lambda s: 'a' in s
a('hello')    # False
a('banana')   # True

# Odd or even (ternary in lambda)
a = lambda x: 'even' if x % 2 == 0 else 'odd'
a(6)    # 'even'
            </code></pre>
            <p><strong>Lambda vs Normal Function:</strong></p>
            <ul>
                <li>Lambda has no name and no explicit <code>return</code> (expression IS the return value)</li>
                <li>Lambda is always one line — no multi-line logic</li>
                <li>Lambda is not directly reusable by name</li>
                <li>Lambda's main use is with <strong>Higher Order Functions (HOF)</strong></li>
            </ul>

            <h3>13. Higher Order Functions (HOF)</h3>
            <p>A <strong>Higher Order Function</strong> either <em>takes a function as input</em> or <em>returns a function as output</em>.</p>
            <pre><code>
# Custom HOF — apply any function to every element of a list
def transform(f, L):
    output = []
    for i in L:
        output.append(f(i))
    print(output)

L = [1, 2, 3, 4, 5]
transform(lambda x: x**2, L)   # [1, 4, 9, 16, 25]
transform(lambda x: x**3, L)   # [1, 8, 27, 64, 125]
            </code></pre>

            <h3>14. map()</h3>
            <p><code>map(function, iterable)</code> — applies a function to <strong>every element</strong> of an iterable and returns a map object (convert with <code>list()</code>).</p>
            <pre><code>
# Square every item
list(map(lambda x: x**2, [1, 2, 3, 4, 5]))
# [1, 4, 9, 16, 25]

# Label each item odd/even
L = [1, 2, 3, 4, 5]
list(map(lambda x: 'even' if x % 2 == 0 else 'odd', L))
# ['odd', 'even', 'odd', 'even', 'odd']

# Extract a specific field from a list of dicts
users = [
    {'name': 'Rahul',  'age': 45, 'gender': 'male'},
    {'name': 'Nitish', 'age': 33, 'gender': 'male'},
    {'name': 'Ankita', 'age': 50, 'gender': 'female'},
]
list(map(lambda u: u['gender'], users))
# ['male', 'male', 'female']
            </code></pre>

            <h3>15. filter()</h3>
            <p><code>filter(function, iterable)</code> — keeps only the elements for which the function returns <code>True</code>.</p>
            <pre><code>
# Numbers greater than 5
L = [3, 4, 5, 6, 7]
list(filter(lambda x: x > 5, L))
# [6, 7]

# Fruits starting with 'a'
fruits = ['apple', 'guava', 'cherry']
list(filter(lambda x: x.startswith('a'), fruits))
# ['apple']
            </code></pre>

            <h3>16. reduce()</h3>
            <p><code>functools.reduce(function, iterable)</code> — applies a function <strong>cumulatively</strong> to reduce an iterable to a single value. Not built-in — must import from <code>functools</code>.</p>
            <pre><code>
import functools

# Sum all items: 1+2+3+4+5 = 15
functools.reduce(lambda x, y: x + y, [1, 2, 3, 4, 5])
# 15

# How it works step by step:
# Step 1: x=1, y=2  → 3
# Step 2: x=3, y=3  → 6
# Step 3: x=6, y=4  → 10
# Step 4: x=10, y=5 → 15

# Find the maximum
functools.reduce(lambda x, y: x if x > y else y, [1, 2, 3, 4, 5])
# 5
            </code></pre>

            <h3>map vs filter vs reduce — Quick Summary</h3>
            <ul>
                <li><strong>map</strong> — transform every element → same-length output</li>
                <li><strong>filter</strong> — keep elements that pass a test → shorter or equal-length output</li>
                <li><strong>reduce</strong> — fold all elements into one value → single output</li>
            </ul>
        `,
        tags: ["Python", "Functions", "Lambda", "HOF", "Notes", "Reference"]
    },
    {
        id: "python-tuples-sets-dictionary",
        title: "Python Tuples, Sets & Dictionary: Complete Notes with Code",
        date: "May 4, 2025",
        summary: "In-depth notes on Python Tuples (immutable lists), Sets (unordered & unique), and Dictionaries (key-value maps) — with all operations, functions, comprehensions, and gotchas.",
        content: `
            <p>Complete notes covering three essential Python data structures: Tuples, Sets, and Dictionaries. Every section includes runnable examples and the expected errors you'll hit.</p>

            <hr style="margin: 2rem 0; border: none; border-top: 1px solid var(--card-border);" />

            <h3 style="font-size:1.6rem; color: var(--accent-color); margin-bottom: 0.5rem;">PART 1 — TUPLES</h3>
            <p>A tuple is similar to a list, but <strong>immutable</strong> — once created, it cannot be changed in any way. Characteristics: <strong>Ordered · Unchangeable · Allows duplicates</strong></p>

            <h3>1. Creating Tuples</h3>
            <pre><code>
# Empty tuple
t = ()
print(t)                          # ()

# Single-item tuple — MUST have a trailing comma
t1 = (2,)
print(t1, type(t1))               # (2,) &lt;class 'tuple'&gt;
# Without comma: (2) is just int, NOT a tuple

# Homogeneous tuple
t2 = (1, 2, 3)
print(t2)                         # (1, 2, 3)

# Heterogeneous tuple
t3 = (1, 'hello', 2, 3.4)
print(t3)                         # (1, 'hello', 2, 3.4)

# 2D tuple
t4 = (1, 2, 3, (1, 2, 3))
print(t4)                         # (1, 2, 3, (1, 2, 3))

# Using type conversion
t5 = tuple('hello')
print(t5)                         # ('h', 'e', 'l', 'l', 'o')
            </code></pre>

            <h3>2. Accessing Items</h3>
            <pre><code>
t2 = (1, 2, 3)

# Positive indexing
print(t2[0])      # 1
print(t2[-1])     # 3

# Slicing
print(t2[:2])     # (1, 2)

# Nested tuple access
t4 = (1, 2, 3, (1, 2, 3))
print(t4[-1][0])  # 1
            </code></pre>

            <h3>3. Editing Items — NOT Possible</h3>
            <pre><code>
t2 = (1, 2, 3)
t2[2] = 'hello'
# TypeError: 'tuple' object does not support item assignment
            </code></pre>

            <h3>4. Adding Items — NOT Possible</h3>
            <pre><code>
t3 = (1, 'hello', 2, 3.4)
# You cannot append or insert into a tuple — it is immutable
# t3.append(5)  →  AttributeError: 'tuple' object has no attribute 'append'
            </code></pre>

            <h3>5. Deleting Items</h3>
            <pre><code>
t3 = (1, 'hello', 2, 3.4)

# Deleting the ENTIRE tuple variable works
del t3
# print(t3)  →  NameError: name 't3' is not defined

# Deleting a specific item does NOT work
t5 = ('h', 'e', 'l', 'l', 'o')
del t5[-1]
# TypeError: 'tuple' object doesn't support item deletion
            </code></pre>

            <h3>6. Operations on Tuples</h3>
            <pre><code>
t1 = (1, 2, 3, 4)
t2 = (5, 6, 7, 8)

# Concatenation (+)
print(t1 + t2)    # (1, 2, 3, 4, 5, 6, 7, 8)

# Repetition (*)
print(t1 * 3)     # (1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4)

# Membership test
print(1 in t1)    # True

# Iteration
for i in t1:
    print(i)      # 1  2  3  4
            </code></pre>

            <h3>7. Tuple Functions</h3>
            <pre><code>
t = (1, 2, 3, 4)

print(len(t))                    # 4
print(min(t))                    # 1
print(max(t))                    # 4
print(sum(t))                    # 10
print(sorted(t, reverse=True))   # [4, 3, 2, 1]  ← returns a LIST

# count — frequency of a value
print(t.count(3))   # 1
print(t.count(5))   # 0

# index — position of first occurrence
print(t.index(4))   # 3
# t.index(5)  →  ValueError: tuple.index(x): x not in tuple
            </code></pre>

            <h3>8. List vs Tuple — Key Differences</h3>
            <ul>
                <li><strong>Syntax:</strong> List uses <code>[]</code>, Tuple uses <code>()</code></li>
                <li><strong>Mutability:</strong> List is mutable, Tuple is immutable</li>
                <li><strong>Speed:</strong> Tuples are faster (immutability allows optimisation)</li>
                <li><strong>Memory:</strong> Tuples occupy less memory than lists</li>
                <li><strong>Methods:</strong> Tuples have fewer built-in methods (only <code>count</code> and <code>index</code>)</li>
                <li><strong>Error risk:</strong> Lists are more error-prone due to mutability</li>
                <li><strong>Usability:</strong> Use Tuple for read-only data, List when data changes</li>
            </ul>
            <pre><code>
# The mutable reference trap — Lists
a = [1, 2, 3]
b = a
a.append(4)
print(a)    # [1, 2, 3, 4]
print(b)    # [1, 2, 3, 4]  ← b changed too! same reference

# Tuples are safe from this
a = (1, 2, 3)
b = a
a = a + (4,)    # creates a NEW tuple; b still points to old one
print(a)    # (1, 2, 3, 4)
print(b)    # (1, 2, 3)     ← b unchanged
            </code></pre>

            <h3>9. Special Syntax — Tuple Unpacking</h3>
            <pre><code>
# Unpack into variables
a, b, c = (1, 2, 3)
print(a, b, c)              # 1 2 3

# Wrong number of variables → ValueError
# a, b = (1, 2, 3)  →  ValueError: too many values to unpack

# Swap two variables — the most Pythonic way
a = 1
b = 2
a, b = b, a
print(a, b)    # 2 1

# Capture remaining items with *
a, b, *others = (1, 2, 3, 4)
print(a, b)      # 1 2
print(others)    # [3, 4]  ← stored as a list

# Zipping tuples
a = (1, 2, 3, 4)
b = (5, 6, 7, 8)
print(tuple(zip(a, b)))
# ((1, 5), (2, 6), (3, 7), (4, 8))
            </code></pre>

            <hr style="margin: 2.5rem 0; border: none; border-top: 1px solid var(--card-border);" />

            <h3 style="font-size:1.6rem; color: var(--accent-color); margin-bottom: 0.5rem;">PART 2 — SETS</h3>
            <p>A set is an <strong>unordered collection of unique immutable items</strong>. The set itself is mutable (you can add/remove items), but elements must be immutable. Characteristics: <strong>Unordered · Mutable · No duplicates · Can't contain mutable items</strong></p>

            <h3>1. Creating Sets</h3>
            <pre><code>
# Empty set — MUST use set(), NOT {} (that creates an empty dict)
s = set()
print(s, type(s))    # set()  &lt;class 'set'&gt;

# 1D set
s1 = {1, 2, 3}
print(s1)            # {1, 2, 3}

# Heterogeneous set
s3 = {1, 'hello', 4.5, True}
# Note: True == 1 in Python, so True is treated as duplicate of 1
print(s3)            # {'hello', 1, 4.5}  ← True not shown

# From a list
s4 = set([1, 2, 3, 4])
print(s4)            # {1, 2, 3, 4}

# Duplicates removed automatically
s5 = {1, 1, 2, 3, 4, 5, 5}
print(s5)            # {1, 2, 3, 4, 5}

# Sets can't contain mutable items (lists, dicts)
# s6 = {1, 2, [1, 2, 3]}  →  TypeError: unhashable type: 'list'

# Order doesn't matter for equality
s1 = {1, 2, 3}
s2 = {3, 2, 1}
print(s1 == s2)      # True
            </code></pre>

            <h3>2. Accessing Items — NOT Possible by Index</h3>
            <pre><code>
s1 = {1, 2, 3, 4, 5}
# s1[1]  →  TypeError: 'set' object is not subscriptable
# Sets are unordered — there is no "first" or "second" item

# Only way to access: iterate or use membership test
print(3 in s1)    # True
for i in s1:
    print(i)
            </code></pre>

            <h3>3. Editing Items — NOT Possible</h3>
            <p>Since indexing doesn't work, you can't target an item to change it. You can only delete and re-add.</p>

            <h3>4. Adding Items</h3>
            <pre><code>
s = {1, 2, 3}

# add — single item
s.add(5)
print(s)             # {1, 2, 3, 5}

# update — add multiple items (unpacks an iterable)
s.update([6, 7, 8])
print(s)             # {1, 2, 3, 5, 6, 7, 8}
            </code></pre>

            <h3>5. Deleting Items</h3>
            <pre><code>
s = {1, 2, 3, 4, 5}

# discard — removes item; NO error if item doesn't exist
s.discard(5)
print(s)             # {1, 2, 3, 4}

# remove — removes item; RAISES KeyError if item doesn't exist
s.remove(4)
print(s)             # {1, 2, 3}
# s.remove(99)  →  KeyError: 99

# pop — removes and returns a RANDOM item (set is unordered)
s.pop()

# clear — empties the set
s.clear()
print(s)             # set()

# del — deletes the entire variable
# del s
            </code></pre>

            <h3>6. Set Operations</h3>
            <pre><code>
s1 = {1, 2, 3, 4, 5}
s2 = {4, 5, 6, 7, 8}

# Union (|) — all elements from both sets
print(s1 | s2)       # {1, 2, 3, 4, 5, 6, 7, 8}

# Intersection (&) — only common elements
print(s1 & s2)       # {4, 5}

# Difference (-) — elements in s1 NOT in s2
print(s1 - s2)       # {1, 2, 3}

# Symmetric Difference (^) — elements NOT common to both
print(s1 ^ s2)       # {1, 2, 3, 6, 7, 8}

# Membership test
print(1 not in s1)   # False
            </code></pre>

            <h3>7. Set Functions (Method Versions)</h3>
            <pre><code>
s1 = {1, 2, 3, 4, 5}
s2 = {4, 5, 6, 7, 8}

# union() — returns new set (doesn't modify s1)
print(s1.union(s2))                  # {1,2,3,4,5,6,7,8}

# update() — modifies s1 in-place (same as |=)
s1.update(s2)
print(s1)                            # {1,2,3,4,5,6,7,8}

# intersection() — returns new set
s1 = {1,2,3,4,5}
print(s1.intersection(s2))           # {4, 5}

# intersection_update() — modifies s1 in-place
s1.intersection_update(s2)
print(s1)                            # {4, 5}

# difference() — returns new set
s1 = {1,2,3,4,5}
print(s1.difference(s2))             # {1, 2, 3}

# difference_update() — modifies s1 in-place
s1.difference_update(s2)
print(s1)                            # {1, 2, 3}

# symmetric_difference() — returns new set
s1 = {1,2,3,4,5}
print(s1.symmetric_difference(s2))   # {1, 2, 3, 6, 7, 8}

# symmetric_difference_update() — modifies s1 in-place
s1.symmetric_difference_update(s2)
print(s1)                            # {1, 2, 3, 6, 7, 8}
            </code></pre>

            <h3>8. Relationship Tests</h3>
            <pre><code>
s1 = {1, 2, 3, 4, 5}
s2 = {4, 5, 6, 7, 8}

# isdisjoint — True if NO common elements
print(s1.isdisjoint(s2))    # False  (4 and 5 are common)

s1 = {1, 2, 3, 4, 5}
s2 = {3, 4, 5}

# issubset — True if s2 contains all elements of s1
print(s1.issubset(s2))     # False
print(s2.issubset(s1))     # True   (s2 ⊆ s1)

# issuperset — True if s1 contains all elements of s2
print(s1.issuperset(s2))   # True   (s1 ⊇ s2)
print(s2.issuperset(s1))   # False

# copy — shallow copy
s1 = {3, 4, 5}
s2 = s1.copy()
print(s1, s2)              # {3, 4, 5}  {3, 4, 5}
            </code></pre>

            <h3>9. Frozenset</h3>
            <p>A <strong>frozenset</strong> is an immutable version of a set. All read operations work; write operations don't. Use it when you need a hashable (immutable) set — e.g., as a dictionary key or inside another set.</p>
            <pre><code>
fs1 = frozenset([1, 2, 3, 4])
fs2 = frozenset([3, 4, 5])

# All set operations work (read-only)
print(fs1 & fs2)    # frozenset({3, 4})
print(fs1 | fs2)    # frozenset({1, 2, 3, 4, 5})

# Write operations don't work
# fs1.add(5)  →  AttributeError: 'frozenset' object has no attribute 'add'

# Can be nested inside another frozenset (unlike regular set)
fs3 = frozenset([1, 2, 3, 4, frozenset([1, 2, 3])])
print(fs3)    # frozenset({1, 2, 3, 4, frozenset({1, 2, 3})})
            </code></pre>

            <h3>10. Set Comprehension</h3>
            <pre><code>
# Syntax: {expression for item in iterable if condition}
result = {i**2 for i in range(1, 11) if i > 5}
print(result)    # {36, 49, 64, 81, 100}
# Note: order not guaranteed — sets are unordered
            </code></pre>

            <hr style="margin: 2.5rem 0; border: none; border-top: 1px solid var(--card-border);" />

            <h3 style="font-size:1.6rem; color: var(--accent-color); margin-bottom: 0.5rem;">PART 3 — DICTIONARY</h3>
            <p>A dictionary is a collection of <strong>key-value pairs</strong> — like a map or associative array in other languages. Characteristics: <strong>Mutable · Keys must be unique · Keys must be immutable (hashable) · Indexing by position has no meaning</strong></p>

            <h3>1. Creating a Dictionary</h3>
            <pre><code>
# Empty dictionary
d = {}
print(d)    # {}

# 1D dictionary
d1 = {'name': 'Mahboob', 'Gender': 'Male'}
print(d1)   # {'name': 'Mahboob', 'Gender': 'Male'}

# Mixed key types (keys must be immutable)
d2 = {(1,2,3): 1, 'hello': 'world'}
print(d2)   # {(1, 2, 3): 1, 'hello': 'world'}

# 2D (nested) dictionary
s = {
    'name': 'Mahboob',
    'college': 'DIAT',
    'sem': 2,
    'Subjects': {
        'dsa': 70,
        'maths': 80,
        'english': 90
    }
}
print(s)

# Create from a list of (key, value) tuples
d3 = dict([(1,1), (2,2), (3,3), (4,4)])
print(d3)   # {1: 1, 2: 2, 3: 3, 4: 4}

# Duplicate keys — last value wins
d4 = {'name': 'Monu', 'name': 'Alam'}
print(d4)   # {'name': 'Alam'}

# Tuple keys are OK (immutable), list keys are NOT
d5 = {'name': 'Alam', (1,2,3): 1}   # OK
print(d5)

# d6 = {'name': 'Alam', [1,2,3]: 1}
# TypeError: unhashable type: 'list'
            </code></pre>

            <h3>2. Accessing Items</h3>
            <pre><code>
my_dict = {'name': 'Jack', 'age': 26}

# Using [] notation — raises KeyError if key missing
print(my_dict['name'])         # Jack

# Using .get() — returns None (or a default) if key missing
print(my_dict.get('age'))      # 26
print(my_dict.get('salary', 0))  # 0  (safe default)

# Nested dictionary access
print(s['Subjects']['maths'])  # 80
            </code></pre>

            <h3>3. Adding Key-Value Pairs</h3>
            <pre><code>
d4 = {'name': 'Alam'}

d4['gender'] = 'Male'
print(d4)    # {'name': 'Alam', 'gender': 'Male'}

d4['weight'] = 72
print(d4)    # {'name': 'Alam', 'gender': 'Male', 'weight': 72}

# Add inside a nested dictionary
s['Subjects']['ds'] = 85
print(s['Subjects'])
# {'dsa': 70, 'maths': 80, 'english': 90, 'ds': 85}
            </code></pre>

            <h3>4. Removing Key-Value Pairs</h3>
            <pre><code>
d = {'name': 'Alam', 'gender': 'Male', 'weight': 72, 3: 3, 4: 4}

# pop(key) — removes by key, returns value
d.pop(3)
print(d)     # {'name': 'Alam', 'gender': 'Male', 'weight': 72, 4: 4}

# popitem() — removes and returns the LAST inserted key-value pair
d.popitem()
print(d)     # {'name': 'Alam', 'gender': 'Male', 'weight': 72}

# del — remove by key
del d['name']
print(d)     # {'gender': 'Male', 'weight': 72}

# clear — empties the dictionary
d.clear()
print(d)     # {}

# Delete from nested dictionary
del s['Subjects']['maths']
print(s['Subjects'])    # {'dsa': 70, 'english': 90, 'ds': 85}
            </code></pre>

            <h3>5. Editing Key-Value Pairs</h3>
            <pre><code>
s['sem'] = 5             # update top-level key
s['Subjects']['dsa'] = 80  # update nested key
print(s)
# {'name': 'Mahboob', 'college': 'DIAT', 'sem': 5,
#  'Subjects': {'dsa': 80, 'english': 90, 'ds': 85}}
            </code></pre>

            <h3>6. Dictionary Operations</h3>
            <pre><code>
s = {'name': 'Mahboob', 'college': 'DIAT', 'sem': 5}

# Membership — tests KEYS only
print('nitish' in s)    # False
print('name' in s)      # True

# Iteration — iterates over KEYS by default
d = {'name': 'Alam', 'gender': 'Male', 'age': 25}
for i in d:
    print(i, d[i])
# name Alam
# gender Male
# age 25
            </code></pre>

            <h3>7. Dictionary Functions</h3>
            <pre><code>
d = {'name': 'Alam', 'gender': 'Male', 'age': 25}

print(len(d))           # 3
print(sorted(d))        # ['age', 'gender', 'name']  ← always a list

# items() — all key-value pairs as tuples
print(d.items())
# dict_items([('name', 'Alam'), ('gender', 'Male'), ('age', 25)])

# keys() — all keys
print(d.keys())         # dict_keys(['name', 'gender', 'age'])

# values() — all values
print(d.values())       # dict_values(['Alam', 'Male', 25])

# update() — merge another dict into this one (overwrites on conflict)
d1 = {1: 2, 3: 4, 4: 5}
d2 = {4: 7, 6: 8}
d1.update(d2)
print(d1)    # {1: 2, 3: 4, 4: 7, 6: 8}  ← key 4 overwritten
            </code></pre>

            <h3>8. Dictionary Comprehension</h3>
            <p>Syntax: <code>{key: value for vars in iterable}</code></p>
            <pre><code>
# Numbers and their squares
squares = {i: i**2 for i in range(1, 11)}
print(squares)
# {1: 1, 2: 4, 3: 9, 4: 16, 5: 25, 6: 36, 7: 49, 8: 64, 9: 81, 10: 100}

# Transform values from an existing dictionary
# Convert km distances to miles (×0.62)
distances = {'delhi': 1000, 'mumbai': 2000, 'bangalore': 1300}
miles = {key: value * 0.62 for (key, value) in distances.items()}
print(miles)
# {'delhi': 620.0, 'mumbai': 1240.0, 'bangalore': 806.0}

# Build a dict from two lists using zip
days   = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
temp_c = [58.5, 60, 70, 20, 80, 90, 85]
weather = {day: temp for (day, temp) in zip(days, temp_c)}
print(weather)
# {'Sunday': 58.5, 'Monday': 60, 'Tuesday': 70, ...}

# Filter with if condition
products = {'phone': 10, 'laptop': 0, 'charger': 32, 'tablet': 0}
in_stock = {p: q for (p, q) in products.items() if q > 0}
print(in_stock)
# {'phone': 10, 'charger': 32}

# Nested comprehension — multiplication tables for 2, 3, 4
tables = {i: {j: i*j for j in range(1, 11)} for i in range(2, 5)}
print(tables[2])
# {1: 2, 2: 4, 3: 6, 4: 8, 5: 10, 6: 12, 7: 14, 8: 16, 9: 18, 10: 20}
print(tables[3])
# {1: 3, 2: 6, 3: 9, 4: 12, 5: 15, 6: 18, 7: 21, 8: 24, 9: 27, 10: 30}
            </code></pre>
        `,
        tags: ["Python", "Tuples", "Sets", "Dictionary", "Notes", "Reference"]
    },
    {
        id: "python-lists",
        title: "Python Lists: Complete Notes with Code",
        date: "May 3, 2025",
        summary: "Everything about Python Lists — creating, accessing, adding, editing, deleting, operators, functions, list comprehension, zip, and the mutable reference trap.",
        content: `
            <p>Notes on Python Lists — one of the most used data structures in Python. Every concept is paired with a runnable example.</p>

            <hr style="margin: 2rem 0; border: none; border-top: 1px solid var(--card-border);" />

            <h3>1. Creating a List</h3>
            <pre><code>
# Empty list
print([])                          # []

# 1D List
print([1, 2, 3])                   # [1, 2, 3]

# 2D List (nested list)
print([1, 2, 3, [4, 5]])           # [1, 2, 3, [4, 5]]

# 3D List
print([[[1,2],[3,4]],[[5,6],[7,8]]])
# [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]

# Heterogeneous list (mixed types)
print([1, True, 5.6, 5+6j, 'Hello'])
# [1, True, 5.6, (5+6j), 'Hello']

# Using type conversion
print(list('hello'))
# ['h', 'e', 'l', 'l', 'o']
            </code></pre>

            <h3>2. Accessing Items from a List</h3>
            <p>Use <strong>indexing</strong> to extract a single element and <strong>slicing</strong> to extract multiple elements.</p>
            <pre><code>
L = [1, 2, 3, 4, 5]

# Positive indexing
print(L[0])     # 1

# Negative indexing (from the end)
print(L[-1])    # 5

# Nested list access
L = [1, 2, 3, [4, 5]]
print(L[-1])       # [4, 5]
print(L[-1][0])    # 4

# 3D list access
L = [[[1,2,3],[10,11,12]], [[4,5,6]], [[7,8,9]]]
print(L[0][0][1])   # 2
print(L[0][1][2])   # 12
print(L[1][0][1])   # 5
print(L[2][0][0])   # 7

# Slicing  [start : stop : step]
l = [1, 2, 3, 4, 5, 6]
print(l[1:4:2])      # [2, 4]
print(l[-5:-2:2])    # [2, 4]
            </code></pre>

            <h3>3. Adding Items to a List</h3>
            <pre><code>
# append — adds a single element at the end
L = [1, 2, 3, 4, 5]
L.append("hiway")
print(L)    # [1, 2, 3, 4, 5, 'hiway']

# extend — adds multiple elements (unpacks an iterable)
L = [1, 2, 3, 4, 5]
L.extend([7, 8, 9])
print(L)    # [1, 2, 3, 4, 5, 7, 8, 9]

L = [1, 2, 3, 4, 5]
L.extend('delhi')
print(L)    # [1, 2, 3, 4, 5, 'd', 'e', 'l', 'h', 'i']

# insert — adds at a specific index
L = [1, 2, 3, 4, 5]
L.insert(2, 34)
print(L)    # [1, 2, 34, 3, 4, 5]
            </code></pre>

            <h3>4. Editing Items in a List</h3>
            <pre><code>
L = [1, 2, 3, 4, 5]

# Edit using indexing
L[-1] = 500

# Edit using slicing
L[1:4] = 200, 300, 400

print(L)    # [1, 200, 300, 400, 500]
            </code></pre>

            <h3>5. Deleting Items from a List</h3>
            <pre><code>
# del — deletes by index, slice, or the entire list
L = [1, 2, 3, 4, 5]
del L[-2]           # remove element at index -2
print(L)            # [1, 2, 3, 5]

del L[1:3]          # remove a slice
print(L)            # [1, 5]

del L               # delete the entire list variable
# print(L)          # NameError: name 'L' is not defined

# remove — removes the first occurrence of a value
L = [1, 2, 3, 4, 5]
L.remove(5)
print(L)            # [1, 2, 3, 4]

# pop — removes and returns element at given index (default: last)
L = [1, 2, 3, 4, 5]
L.pop(2)            # removes index 2
print(L)            # [1, 2, 4, 5]

L.pop()             # removes last element
print(L)            # [1, 2, 4]

# clear — empties the list (keeps the variable)
L = [1, 2, 3, 4, 5]
L.clear()
print(L)            # []
            </code></pre>

            <h3>6. Operators on Lists</h3>
            <pre><code>
# Arithmetic: + (merge) and * (repeat)
L1 = [1, 2, 3, 4]
L2 = [5, 6, 7, 8]

print(L1 + L2)   # [1, 2, 3, 4, 5, 6, 7, 8]
print(L1 * 3)    # [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4]

# Membership: in / not in
L1 = [1, 2, 3, 4]
L2 = [1, 2, 3, 4, [5, 6]]

print(5 not in L1)    # True
print(5 in L2)        # False  — 5 is inside a nested list, not top-level
print([5,6] in L2)    # True

# Loop
L3 = [[[1,2,3]], [[4,5,6]], [[7,8,9]]]
for i in L3:
    print(i)
# [[1, 2, 3]]
# [[4, 5, 6]]
# [[7, 8, 9]]
            </code></pre>

            <h3>7. List Functions</h3>
            <pre><code>
L = [1, 2, 3, 4]
print(len(L))               # 4
print(min(L))               # 1
print(max(L))               # 4
print(sorted(L, reverse=True))  # [4, 3, 2, 1]

# count — frequency of a value
L = [1, 2, 1, 3, 1, 2, 5, 4, 5, 6]
print(L.count(1))   # 3
print(L.count(5))   # 2

# index — position of first occurrence
print(L.index(1))   # 0
print(L.index(2))   # 1
print(L.index(3))   # 3

# reverse — permanently reverses in-place
L = [1, 2, 1, 3, 1, 2, 5, 4, 5, 6]
L.reverse()
print(L)    # [6, 5, 4, 5, 2, 1, 3, 1, 2, 1]

# sort vs sorted
# sorted() → returns a NEW sorted list (original unchanged)
# sort()   → modifies the list IN-PLACE
L = [2, 1, 3, 6, 5, 7]
print(sorted(L))    # [1, 2, 3, 5, 6, 7]  — L still [2,1,3,6,5,7]
L.sort()
print(L)            # [1, 2, 3, 5, 6, 7]  — L modified permanently

# copy — shallow copy (different id, same values)
L  = [1, 2, 1, 3]
L1 = L.copy()
print(id(L) == id(L1))   # False — different objects in memory
            </code></pre>

            <h3>8. List Comprehension</h3>
            <p>A concise way to create lists. Syntax: <code>[expression for item in iterable if condition]</code></p>
            <p><strong>Advantages:</strong> more time & space efficient than loops, fewer lines of code, transforms iterative statements into a formula.</p>
            <pre><code>
# Basic — numbers 1 to 10
l = [i for i in range(1, 11)]
print(l)    # [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Scalar multiplication on a vector
v = [2, 3, 4]
s = -3
print([s * i for i in v])    # [-6, -9, -12]

# Append squares to original list
L = [1, 2, 3, 4, 5]
print(L + [i**2 for i in L])
# [1, 2, 3, 4, 5, 1, 4, 9, 16, 25]

# Numbers divisible by 5 from 1 to 50
print([i for i in range(1, 51) if i % 5 == 0])
# [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]

# Filter by starting letter
languages = ['java', 'python', 'php', 'c', 'javascript']
print([lang for lang in languages if lang.startswith('p')])
# ['python', 'php']

# Nested if — fruit must be in basket AND start with 'a'
basket    = ['apple', 'guava', 'cherry', 'banana']
my_fruits = ['apple', 'kivi', 'grapes', 'banana']
print([f for f in my_fruits if f in basket if f.startswith('a')])
# ['apple']

# Nested comprehension — 3x3 matrix
print([[i*j for i in range(1, 4)] for j in range(1, 4)])
# [[1, 2, 3], [2, 4, 6], [3, 6, 9]]

# Cartesian product of two lists
L1 = [1, 2, 3, 4]
L2 = [5, 6, 7, 8]
print([i*j for i in L1 for j in L2])
# [5, 6, 7, 8, 10, 12, 14, 16, 15, 18, 21, 24, 20, 24, 28, 32]
            </code></pre>

            <h3>9. Two Ways to Traverse a List</h3>
            <pre><code>
# Itemwise — direct value access
l = [1, 2, 3, 4]
for i in l:
    print(i)
# 1  2  3  4

# Indexwise — index + value
l = [10, 20, 30, 40]
for i in range(0, len(l)):
    print(i, l[i])
# 0 10
# 1 20
# 2 30
# 3 40
            </code></pre>

            <h3>10. Zip</h3>
            <p><code>zip()</code> pairs elements from two or more iterables together into tuples. If the iterables have different lengths, the shortest one decides the final length.</p>
            <pre><code>
L1 = [1,  2,  3,  4]
L2 = [-1, -2, -3, -4]

print(list(zip(L1, L2)))
# [(1, -1), (2, -2), (3, -3), (4, -4)]

# Add corresponding elements of two lists
result = [i + j for i, j in zip(L1, L2)]
print(result)    # [0, 0, 0, 0]
            </code></pre>

            <h3>11. Disadvantages of Python Lists</h3>
            <ul>
                <li><strong>Slow</strong> — not optimised for numerical operations (use NumPy arrays instead)</li>
                <li><strong>Risky usage</strong> — assignment copies the reference, not the data</li>
                <li><strong>More memory</strong> — stores type info for every element (heterogeneous overhead)</li>
            </ul>
            <pre><code>
a = [1, 2, 3]
b = a           # b points to the SAME list in memory
c = a.copy()    # c is an independent shallow copy

a.append(4)

print(a)    # [1, 2, 3, 4]
print(b)    # [1, 2, 3, 4]  ← b changed too! same reference
print(c)    # [1, 2, 3]     ← c unaffected (copied before append)

# Key rule: use .copy() (or list(a)) when you need an independent copy
            </code></pre>
        `,
        tags: ["Python", "Lists", "Notes", "Reference"]
    },
    {
        id: "python-basics",
        title: "Python Basics: A Complete Beginner's Reference",
        date: "May 1, 2025",
        summary: "A hands-on reference covering Python fundamentals — variables, data types, control flow, functions, collections, and OOP — with runnable code snippets.",
        content: `
            <p>This is my personal reference for Python fundamentals. Everything here is something I actively use. Code snippets are kept minimal and runnable.</p>

            <hr style="margin: 2rem 0; border: none; border-top: 1px solid var(--card-border);" />

            <h3>1. Variables & Data Types</h3>
            <p>Python is dynamically typed — you don't declare types explicitly.</p>
            <pre><code>
# Basic types
name    = "Mahboob"       # str
age     = 24              # int
gpa     = 8.10            # float
is_ml   = True            # bool
nothing = None            # NoneType

# Check the type of any variable
print(type(name))         # &lt;class 'str'&gt;

# Type casting
x = int("42")             # str → int
y = float(7)              # int → float
z = str(3.14)             # float → str
            </code></pre>

            <h3>2. Strings</h3>
            <p>Strings are immutable sequences of characters. Python gives you a rich set of built-in methods.</p>
            <pre><code>
s = "Hello, Python!"

# Common operations
print(s.upper())           # HELLO, PYTHON!
print(s.lower())           # hello, python!
print(s.replace("Python", "World"))  # Hello, World!
print(s.split(", "))       # ['Hello', 'Python!']
print(len(s))              # 15
print(s[0:5])              # Hello  (slicing)
print(s[-1])               # !      (negative index)

# f-strings (preferred formatting)
model = "PIAU-Net"
acc   = 97.38
print(f"{model} achieved {acc:.2f}% mIoU")
# PIAU-Net achieved 97.38% mIoU

# Useful string methods
print("  spaces  ".strip())     # "spaces"
print("a,b,c".split(","))       # ['a', 'b', 'c']
print("-".join(["a","b","c"]))  # a-b-c
print("pytorch".startswith("py"))  # True
            </code></pre>

            <h3>3. Control Flow</h3>
            <p>Python uses indentation (4 spaces) instead of braces. There are no brackets around conditions.</p>
            <pre><code>
score = 85

# if / elif / else
if score >= 90:
    grade = "A"
elif score >= 75:
    grade = "B"
else:
    grade = "C"

print(grade)  # B

# Ternary (one-liner)
result = "Pass" if score >= 50 else "Fail"
print(result)  # Pass

# Comparison and logical operators
x, y = 10, 20
print(x &lt; y and y &lt; 100)   # True
print(x == 10 or y == 10)   # True
print(not x == 5)            # True
            </code></pre>

            <h3>4. Loops</h3>
            <pre><code>
# for loop over a range
for i in range(5):          # 0, 1, 2, 3, 4
    print(i, end=" ")

# for loop over a list
frameworks = ["PyTorch", "FastAPI", "Streamlit"]
for fw in frameworks:
    print(fw)

# enumerate — get index + value together
for idx, fw in enumerate(frameworks, start=1):
    print(f"{idx}. {fw}")
# 1. PyTorch
# 2. FastAPI
# 3. Streamlit

# while loop
count = 0
while count &lt; 3:
    print(count)
    count += 1

# break and continue
for n in range(10):
    if n == 3:
        continue    # skip 3
    if n == 6:
        break       # stop at 6
    print(n, end=" ")   # 0 1 2 4 5
            </code></pre>

            <h3>5. Lists</h3>
            <p>Lists are ordered, mutable, and allow duplicates. The most-used collection in Python.</p>
            <pre><code>
nums = [3, 1, 4, 1, 5, 9, 2, 6]

# Access
print(nums[0])       # 3
print(nums[-1])      # 6
print(nums[2:5])     # [4, 1, 5]  (slicing)

# Modify
nums.append(7)       # add to end
nums.insert(0, 0)    # insert at index
nums.remove(1)       # remove first occurrence of 1
popped = nums.pop()  # remove & return last element

# Useful operations
nums.sort()                    # sort in-place
nums.sort(reverse=True)        # descending
print(sorted(nums))            # returns new sorted list
print(len(nums))               # length
print(sum(nums))               # sum
print(min(nums), max(nums))    # min, max

# Check membership
print(5 in nums)     # True / False
            </code></pre>

            <h3>6. List Comprehensions</h3>
            <p>A clean, Pythonic way to build lists in one line. I use these constantly.</p>
            <pre><code>
# Basic pattern: [expression for item in iterable if condition]

squares = [x**2 for x in range(6)]
# [0, 1, 4, 9, 16, 25]

evens = [x for x in range(20) if x % 2 == 0]
# [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]

# Transform strings
models = ["piau-net", "litefishseg", "fishsegdet"]
upper  = [m.upper() for m in models]
# ['PIAU-NET', 'LITEFISHSEG', 'FISHSEGDET']

# Nested list comprehension (flatten a 2D list)
matrix = [[1, 2], [3, 4], [5, 6]]
flat   = [val for row in matrix for val in row]
# [1, 2, 3, 4, 5, 6]
            </code></pre>

            <h3>7. Tuples & Sets</h3>
            <pre><code>
# Tuple — ordered, immutable
point = (3.5, 7.2)
x, y  = point           # unpacking
print(x, y)             # 3.5  7.2

# Tuples are faster than lists for fixed data
rgb = (255, 128, 0)
print(rgb[0])           # 255

# Set — unordered, unique elements
tags = {"ml", "cv", "rag", "ml", "cv"}
print(tags)             # {'ml', 'cv', 'rag'}  — duplicates removed

tags.add("nlp")
tags.discard("rag")

# Set operations
a = {1, 2, 3, 4}
b = {3, 4, 5, 6}
print(a & b)    # intersection → {3, 4}
print(a | b)    # union        → {1, 2, 3, 4, 5, 6}
print(a - b)    # difference   → {1, 2}
            </code></pre>

            <h3>8. Dictionaries</h3>
            <p>Key-value pairs. The go-to structure for structured data.</p>
            <pre><code>
model_info = {
    "name":       "PIAU-Net",
    "params_M":   12.4,
    "miou":       97.38,
    "dataset":    "LFish"
}

# Access
print(model_info["name"])                  # PIAU-Net
print(model_info.get("params_M", 0))       # 12.4 (safe access)

# Modify
model_info["miou"] = 97.5                  # update
model_info["backbone"] = "Attention U-Net" # add new key
del model_info["dataset"]                  # remove key

# Iterate
for key, value in model_info.items():
    print(f"{key}: {value}")

# Useful methods
print(model_info.keys())    # dict_keys([...])
print(model_info.values())  # dict_values([...])

# Dictionary comprehension
squared = {x: x**2 for x in range(5)}
# {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}
            </code></pre>

            <h3>9. Functions</h3>
            <p>Functions are first-class objects in Python — you can pass them around like variables.</p>
            <pre><code>
# Basic function
def greet(name):
    return f"Hello, {name}!"

print(greet("Mahboob"))   # Hello, Mahboob!

# Default arguments
def power(base, exp=2):
    return base ** exp

print(power(3))       # 9   (uses default exp=2)
print(power(3, 3))    # 27

# *args — variable positional arguments
def total(*nums):
    return sum(nums)

print(total(1, 2, 3, 4))   # 10

# **kwargs — variable keyword arguments
def model_summary(**info):
    for k, v in info.items():
        print(f"{k}: {v}")

model_summary(name="LiteFishSeg", miou=80.3, params="9.08M")

# Lambda (anonymous function)
square = lambda x: x ** 2
print(square(5))    # 25

# Useful with sorted()
models = [("PIAU-Net", 97.38), ("LiteFishSeg", 80.3), ("FishSegDet", 94.41)]
ranked = sorted(models, key=lambda m: m[1], reverse=True)
print(ranked)
# [('PIAU-Net', 97.38), ('FishSegDet', 94.41), ('LiteFishSeg', 80.3)]
            </code></pre>

            <h3>10. Error Handling</h3>
            <pre><code>
# try / except / finally
try:
    result = 10 / 0
except ZeroDivisionError as e:
    print(f"Error: {e}")        # Error: division by zero
except (TypeError, ValueError) as e:
    print(f"Type/Value error: {e}")
else:
    print("No error occurred")  # runs only if no exception
finally:
    print("Always runs")        # cleanup goes here

# Raise your own exceptions
def load_model(path):
    if not path.endswith(".pt"):
        raise ValueError(f"Expected a .pt file, got: {path}")
    # ... load logic
            </code></pre>

            <h3>11. File I/O</h3>
            <pre><code>
# Writing a file
with open("notes.txt", "w") as f:
    f.write("Python basics\\n")
    f.write("Written with context manager\\n")

# Reading a file
with open("notes.txt", "r") as f:
    content = f.read()          # entire file as string
    print(content)

# Read line by line
with open("notes.txt", "r") as f:
    for line in f:
        print(line.strip())

# Append to file
with open("notes.txt", "a") as f:
    f.write("New line added\\n")

# Always use 'with' — it closes the file automatically
            </code></pre>

            <h3>12. Object-Oriented Programming (OOP)</h3>
            <p>Classes bundle data (attributes) and behaviour (methods) together.</p>
            <pre><code>
class Model:
    # Class variable — shared by all instances
    framework = "PyTorch"

    # Constructor
    def __init__(self, name, miou):
        self.name = name        # instance attribute
        self.miou = miou

    # Instance method
    def summary(self):
        return f"{self.name} | mIoU: {self.miou}% | {self.framework}"

    # String representation
    def __repr__(self):
        return f"Model(name={self.name!r}, miou={self.miou})"

# Instantiate
m1 = Model("PIAU-Net", 97.38)
m2 = Model("LiteFishSeg", 80.3)

print(m1.summary())   # PIAU-Net | mIoU: 97.38% | PyTorch
print(m2)             # Model(name='LiteFishSeg', miou=80.3)

# Inheritance
class EdgeModel(Model):
    def __init__(self, name, miou, params_M):
        super().__init__(name, miou)   # call parent constructor
        self.params_M = params_M

    def summary(self):
        base = super().summary()
        return f"{base} | Params: {self.params_M}M"

lite = EdgeModel("LiteFishSeg", 80.3, 9.08)
print(lite.summary())
# LiteFishSeg | mIoU: 80.3% | PyTorch | Params: 9.08M
            </code></pre>

            <h3>13. Useful Built-ins to Know</h3>
            <pre><code>
nums = [4, 1, 7, 2, 9, 3]

# map — apply a function to every element
doubled = list(map(lambda x: x * 2, nums))
# [8, 2, 14, 4, 18, 6]

# filter — keep elements that pass a condition
evens = list(filter(lambda x: x % 2 == 0, nums))
# [4, 2]

# zip — pair elements from two iterables
names  = ["PIAU-Net", "LiteFishSeg", "FishSegDet"]
scores = [97.38, 80.3, 94.41]
paired = list(zip(names, scores))
# [('PIAU-Net', 97.38), ('LiteFishSeg', 80.3), ('FishSegDet', 94.41)]

# any / all
flags = [True, True, False]
print(any(flags))    # True  — at least one True
print(all(flags))    # False — not all True

# enumerate (reminder)
for i, name in enumerate(names, start=1):
    print(f"{i}. {name}")
            </code></pre>
        `,
        tags: ["Python", "Basics", "Notes", "Reference"]
    }
];
