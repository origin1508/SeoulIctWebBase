fruits = ["사과", "바나나", "체리", "파인애플", "파인애플", "파인애플", "바나나", "블루베리", "망고", "수박", "오렌지", "사과", "바나나", "체리", "딸기", "한라봉", "딸기", "블루베리"]
new_fruits = []

for i in fruits:
  if not i in new_fruits:
    new_fruits.append(i)

print(fruits)
print("중복된 과일들의 개수: ", len(fruits))
print(new_fruits)
print("중복제거된 과일들의 개수: ", len(new_fruits)) 