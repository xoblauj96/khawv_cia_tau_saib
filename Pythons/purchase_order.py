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
    # user_data = models.execute_kw(db, uid, password, 'purchase.order', 'read', [[['name', '=', "P06272"]]])
    # user_data = models.execute_kw(db, uid, password, 'purchase.order', 'read', ['P06272'])
    purchase_order_ids = models.execute_kw(db, uid, password, 'purchase.order', 'search', [[('name', '=', 'P06274')]], {'limit': 1})
    print(purchase_order_ids)
    purchase_order_data = models.execute_kw(db, uid, password, 'purchase.order.line', 'read', [purchase_order_ids], {'fields': ['product_template_id']})
    print("Authenticated User Data:", purchase_order_data)
else:
    print("Authentication failed.")

purchase_order_line_ids = models.execute_kw(db, uid, password, 'purchase.order.line', 'search', [[('order_id.name', '=', 'P06274')]], {'limit': 1})
print(purchase_order_line_ids)

if purchase_order_line_ids:
    purchase_order_line_data = models.execute_kw(db, uid, password, 'purchase.order.line', 'read', [purchase_order_line_ids], {'fields': ['product_id', 'product_qty']})
    print("Purchase Order Line Data:", purchase_order_line_data)
else:
    print("No purchase order line found.")

# Assuming you want to search in the 'purchase.order.line' model
purchase_order_line_ids = models.execute_kw(
    db, uid, password,
    'purchase.order.line',
    'search',
    [[('order_id', '=', 127)]],
    {'limit': 1}
)

print(purchase_order_line_ids)

if purchase_order_line_ids:
    purchase_order_line_data = models.execute_kw(
        db, uid, password,
        'purchase.order.line',
        'read',
        [purchase_order_line_ids],
        {'fields': ['product_id', 'product_qty']}
    )
    print("Purchase Order Line Data:", purchase_order_line_data)
else:
    print("No purchase order line found.")