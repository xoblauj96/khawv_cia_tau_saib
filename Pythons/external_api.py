import xmlrpc.client

url="http://10.150.1.92:8888"
db="reallive_kkm_clone_270923"
user_name="admin@kokkokm.com"
password="admin@lod24"

common = xmlrpc.client.ServerProxy('{}/xmlrpc/2/common'.format(url))
print(common.version())
uid = common.authenticate(db,user_name,password,{})


print("uid:: ",uid)
if uid:
    models = xmlrpc.client.ServerProxy('{}/xmlrpc/2/object'.format(url))
    partner = models.execute_kw(db, uid, password, 'res.users', 'search', [[['is_company', '=', True]]])
    print("partner::: ",partner)

    #read method
    # partners = models.execute_kw(db, uid, password, 'res.users', 'read', [partner])
    partners = models.execute_kw(db, uid,  password, 'res.users', 'read', [uid], {'fields':['id','name','login']})

    print("partners****************: ",partners,"*************")
    print(len(partners))
