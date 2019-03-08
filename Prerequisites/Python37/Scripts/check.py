#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from homeassistant.const import __version__
import requests

def main():
    #local_version = '0.84.6'
    local_version = __version__
    online_version = requests.get('https://pypi.python.org/pypi/homeassistant/json').json()['info']['version']
    if local_version == online_version:
        print('已安装最新版本: %s'%local_version)
    else:
        print('有新版本(%s)可升级！'%online_version)

if __name__ == '__main__':
    main()