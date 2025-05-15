import time

start = time.time()
print(start)
for i in range(1,100):
    print(i)

print('time',time.time() -  start)