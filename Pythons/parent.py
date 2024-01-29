from child import child


class parent():
    obj1 = child()
    obj1.name = "Sor"
    obj1.last_name ="Lor"
    obj1.data['name']="xob"
    print(obj1.data)
    obj1.greeting(obj1.name,obj1.last_name)