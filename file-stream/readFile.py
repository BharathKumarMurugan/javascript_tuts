with open('./restaurant.json', 'r', encoding='utf8') as file:
    content = file.read()
    print(content)
    file.close()
