
# fibonaccci series is the sum of two number before it's

# def fibonacci(value):
#     a, b = 0, 1 #INITIALIZED A AND B = 0,1
#     for _ in range(value): # LOOP BASED ON VALUE
#         print(a) 
#         a = a+b #INCREASE THE VALUE
# fibonacci(10)
    #THIS CODE HAVE A ISSUE EVERY TIME WE ARE INCREASE THE A 
    #USING B VALUE WHICH IS 1 ALWAYS SO A INCREASING BY 1 SO IT'S NOT FIBONACCI SERIES

# def fibonacci(value):
#     arr = []
#     a,b = 0,1
#     arr.append(0)
#     for _ in range(value):
#         print(a)
#         a, b = b, a+b
#         arr.append(a)
    
#     return arr
# res = fibonacci(11)
# print(res)

def draw_rect_pattern():
    n = 5
    i = 1
    j = 1
    for i in range(n):
        i += 1
        k = ""
        for j in range(n):
            j += 1
            if j == 1 or j == n or i == 1 or i ==n:
                # print('*')
                k += "*"
            else:
                # print(" ")
                k += " "
        print(k)

draw_rect_pattern()

