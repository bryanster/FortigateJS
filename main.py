import requests
endpoint = "https://firewall.nexezo.com/api/v2/cmdb/firewall/policy/"
data = {"ip": "firewall.nexezo.com"}
headers = {"Authorization": "Bearer wf8jbbxGcnp9G7jf7Nw4s1QpmNq0fb"}

print(requests.get(endpoint, data=data, headers=headers).json())