import xmlrpc.client


url="http://128.199.73.88:1996/xmlrpc/2"
db="reallivekkm3223"
username="admin@kokkokm.com"
password="lod12345"

# Connect to the Odoo server
common = xmlrpc.client.ServerProxy(f"{url}/common")
uid = common.authenticate(db, username, password, {})
print("============uid:",uid)
if uid:
    models = xmlrpc.client.ServerProxy(f"{url}/object")
  
# Assuming you want to search in the 'purchase.order.line' model
purchase_order_line_ids = models.execute_kw(
    db, uid, password,
    'purchase.order.line',
    'search',
    [[('order_id', '=', 7126)]],
    {'limit': 10}
)

print(purchase_order_line_ids)

if purchase_order_line_ids:
    purchase_order_line_data = models.execute_kw(
        db, uid, password,
        'purchase.order.line',
        'read',
        [purchase_order_line_ids],
        {'fields': ['product_template_id','name']}
    )
    print("Purchase Order Line Data:", purchase_order_line_data)
else:
    print("No purchase order line found.")