# # To create an API controller that updates data in Odoo and automatically logs the user name using mail.thread, you can follow these general steps. This example assumes you're working with Odoo 14 or later.

# # Create a new Odoo module (if you haven't already). Your module should have the necessary structure with __init__.py, __manifest__.py, and other required files.

# # Define your model with mail.thread:
# Create a model that inherits from mail.thread. Let's call it custom.model:

# python
# Copy code
# from odoo import models, fields, api

# class CustomModel(models.Model):
#     _name = 'custom.model'
#     _inherit = ['mail.thread']

#     name = fields.Char(string='Name')
#     description = fields.Text(string='Description')
# Create an API controller:
# Create a new controller file, let's say controllers/api_controller.py. Define your API methods in this file:

# python
# Copy code
# from odoo import http, _
# from odoo.http import request

# class ApiController(http.Controller):
#     @http.route('/api/update_record', type='json', auth='user')
#     def update_record_api(self, record_id, new_values):
#         custom_model = request.env['custom.model']

#         # Fetch the record to update
#         record = custom_model.browse(record_id)

#         # Log the user name
#         user_name = request.env.user.name
#         record.message_post(
#             body=f"Update initiated by {user_name}.",
#             subject="Record Update"
#         )

#         # Update the record
#         record.write(new_values)

#         # Log the updated values
#         record.message_post(
#             body=f"Record updated by {user_name}.",
#             subject="Record Update"
#         )

#         return {'success': True}
# This controller has an API endpoint /api/update_record that takes record_id and new_values as parameters. It logs the user name before and after the update.

# Update security settings:
# Make sure to update the security settings in your module's __manifest__.py to allow access to the API:

# python
# Copy code
# 'security': {
#     'auth': ['user'],
# },
# Restart your Odoo server:
# After making changes, restart your Odoo server to apply the changes.

# Please note that this is a basic example, and you should add proper error handling, validation, and security measures based on your requirements. Additionally, ensure that your API endpoint is secured appropriately, especially if it involves sensitive data or actions.






