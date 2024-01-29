import asyncio

async def print_numbers():
    for i in range(5):
        print(i)
        await asyncio.sleep(6)
        print("waitting.....")

# async def print_letters():
#     for letter in 'ABCDE':
#         print(letter)
#         await asyncio.sleep(3)

async def mains():
    task1 = asyncio.create_task(print_numbers())
    # task2 = asyncio.create_task(print_letters())

    await task1
    # await task2
print(__name__)
if __name__ == "__main__":
    asyncio.run(mains())