import time

# 1. Measuring time to execute

# different time for different machine
# THIS IS NOT THE CORRECT WAY TO MEASURING TIME
# BECAUSE IT'S DEPENDS ON MACHINE PEOCESSOR RAM
# time varies if implementation changes
# does not work for extreme small inputs

start = time.time()
for i in range(1,100):
    print(i)
print('time',time.time() -  start)

start2 = time.time()
i = 1
while i< 100:
    print(i)
    i+=i
print('time2',time.time() - start2)

# 2. Counting operation involved

# different time for different machine
# solving machine dependency
# solving relationship between time and input
# time varies if implementation changes
# No clear definition of which operation to be count

# Assume these steps take
# Constant time:
# 	Mathematical operations
# 	Comparisons
# 	Assignments
# 	Accessing objects in memory
# Then count the number of operations executed as function of size of input

# def c_to_f(c):
# 	Return c*9.0/5 + 32 # 3 ops


# def mysum(x):
# 	Total = 0 # 1 ops
# 	For i in range(x+1): # 1 ops
# 		Total += 1 
# 	Return total  # 2 ops

# Mysum= 1+3x ops

# ORDER OF GROWTH