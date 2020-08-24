import os
from pprint import pprint
from fortiosapi import FortiOSAPI

FG = FortiOSAPI()

# Source _host
FG_HOST = '10.255.255.254'
FG_USER = 'admin'
FG_PASS = 'Judoka98'

DEVICE = {
    'host': FG_HOST,
    'username': FG_USER,
    'password': FG_PASS,
}

FG.login(**DEVICE)



out = FG.get('system', 'global')

pprint(out)

FG.logout()
#yeet
