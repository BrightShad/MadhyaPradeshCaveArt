import re
import os
import json
if os.path.exists('doc.html'):
    with open('doc.html', encoding='utf-8') as f:
        html = f.read()
    images = re.findall(r'<img[^>]+src="([^"]+)"', html)
    with open('images.json', 'w') as f:
        json.dump(images, f, indent=2)
else:
    print('doc.html not found')
