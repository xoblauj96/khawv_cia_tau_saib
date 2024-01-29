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
  
# Assuming you want to search in the 'purchase.order.line' model account.payment.register
account_payment_register = models.execute_kw(
    db, uid, password,    'account.move',
    'search',
    [[('name','=','ARDKX/2023/0032')]],
    {'limit': 10}
)

print(account_payment_register)

if account_payment_register:
    purchase_order_line_data = models.execute_kw(
        db, uid, password,
        'account.move',
        'read',
        [account_payment_register],
        {'fields': ['state','name','payment_state','tax_totals_json']}
    )
    print("Purchase Order Line Data:", purchase_order_line_data)
else:
    print("No purchase order line found.")