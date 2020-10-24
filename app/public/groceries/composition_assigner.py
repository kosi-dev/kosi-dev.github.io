import pandas as pd
from math import isnan

G_COMPOSITION = 7
G_NAME = 2
C_NAME = 1

# Read CSV files
composition_table = pd.read_csv("composition_table.csv", encoding="latin_1").to_numpy()
groceries = pd.read_csv("groceries.csv")
header = groceries.columns
groceries = groceries.to_numpy()

def list_get(_list, _indices):
	result = ""
	for i in _indices:
		result += str(_list[i]).replace(",", "") + ";"
	return result

display = []

def search(key):
	display.clear()
	i = 0
	for row in composition_table:
		if key in str(row[C_NAME]).lower():
			display.append(list_get(row, [1, 2, 4, 8, 10, 56, 62, 66, 68,]))
			print(f"{i}: {row[C_NAME]}")
			i += 1

# Look through groceries

for row in groceries:
	if type(row[G_COMPOSITION]) != str and isnan(row[G_COMPOSITION]):
		print(row)
		search(row[G_NAME].lower().split(" ")[0])
		key = ""
		while True:
			key = input("Search/Break/Accept: ")
			if key == "b" or key == "s":
				break
			elif key.isdigit() and int(key) < len(display):
				row[G_COMPOSITION] = display[int(key)]
				break
			else:
				print(row)
				search(key.lower())
		if key == "b":
			break

pd.DataFrame(groceries).to_csv("groceries.csv", index = False, header = header)
