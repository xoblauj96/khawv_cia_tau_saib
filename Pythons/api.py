import xmlrpc.client

# Odoo server URL and database name
# url = "http://your-odoo-server-url/xmlrpc/2"
# db = "your_database_name"
url="http://10.150.1.92:8888/xmlrpc/2"
db="reallive_kkm_clone_270923"

# Odoo credentials
username="admin@kokkokm.com"
password="admin@lod24"

# Connect to the Odoo server
common = xmlrpc.client.ServerProxy(f"{url}/common")
uid = common.authenticate(db, username, password, {})
print("============uid:",uid)
if uid:
    # Successfully authenticated, now you can perform actions using the authenticated user's UID
    models = xmlrpc.client.ServerProxy(f"{url}/object")
    # Example: Read records from res.users model
    # user_data = models.execute_kw(db, uid, password, 'res.users', 'read', [uid])
    user_data = models.execute_kw(db, uid, password, 'res.users', 'read', [uid], {'fields': ['name', 'login','user_id','pin','barcode']})
    print("Authenticated User Data:", user_data)
else:
    print("Authentication failed.")

# Specify the file name and mode ('w' for write)
file_name = "example.json"

# Open the file in write mode
# If the file doesn't exist, it will be created. If it exists, its content will be overwritten.
with open(file_name, 'w') as file:
    # Write content to the file
    file.write(str(user_data).replace("'", '"').replace("False","false").replace("True","true"))
   
print(f"File '{file_name}' has been created and written to.")