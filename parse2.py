import urllib.request
import re
url = 'https://docs.google.com/document/d/1Jqsa9LsHKVlM5v7Z1s4TKi18sZ05xmAbebJNehGrYag/export?format=html'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    html = urllib.request.urlopen(req).read().decode('utf-8')
    images = re.findall(r'<img[^>]+src="([^"]+)"', html)
    with open('images.txt', 'w', encoding='utf-8') as f:
        f.write('\n'.join(images))
except Exception as e:
    print(e)
