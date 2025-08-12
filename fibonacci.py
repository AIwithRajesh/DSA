
# fibonaccci series is the sum of two number before it's

# def fibonacci(value):
#     a, b = 0, 1 #INITIALIZED A AND B = 0,1
#     for _ in range(value): # LOOP BASED ON VALUE
#         print(a) 
#         a = a+b #INCREASE THE VALUE
# fibonacci(10)
    #THIS CODE HAVE A ISSUE EVERY TIME WE ARE INCREASE THE A 
    #USING B VALUE WHICH IS 1 ALWAYS SO A INCREASING BY 1 SO IT'S NOT FIBONACCI SERIES

def fibonacci(value):
    a,b = 0,1
    for _ in range(value):
        print(a)
        a, b = b, a+b

fibonacci(11)