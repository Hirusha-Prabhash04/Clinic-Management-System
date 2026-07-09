from pathlib import Path
import re
root = Path('.')
html_files = [*root.glob('*.html'), *root.glob('pages/*.html')]
missing = []
for html in html_files:
    text = html.read_text(encoding='utf-8')
    for link in re.findall(r'href="([^"]+)"', text):
        if link.startswith(('http', 'mailto:', '#')):
            continue
        if not (html.parent / link).resolve().exists():
            missing.append((str(html), link))
print('Checked', len(html_files), 'HTML files')
print('Missing links:', len(missing))
for html, link in missing:
    print(f'{html}: {link}')
