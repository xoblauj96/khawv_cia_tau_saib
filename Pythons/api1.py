import xmlrpc.client


url="http://10.150.1.92:8888/xmlrpc/2"
db="reallive_kkm_clone_270923"
username="admin@kokkokm.com"
password="admin@lod24"

# Connect to the Odoo server
common = xmlrpc.client.ServerProxy(f"{url}/common")
uid = common.authenticate(db, username, password, {})
print("============uid:",uid)
if uid:
    models = xmlrpc.client.ServerProxy(f"{url}/object")
    user_data = models.execute_kw(db, uid, password, 'res.users', 'read', [uid], {'fields': ['name', 'login','user_id','pin','barcode']})
    print("Authenticated User Data:", user_data)
else:
    print("Authentication failed.")
