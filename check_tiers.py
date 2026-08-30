import re, json

with open(r'C:\Users\ASUS\Desktop\WAT\data.js', 'r', encoding='utf-8') as f:
    content = f.read()

match = re.search(r'const STATES_DATA\s*=\s*(\[.*?\]);', content, re.DOTALL)
if match:
    data = json.loads(match.group(1))
    print(f'Total states: {len(data)}')
    tiers = {}
    for item in data:
        t = item.get('tier', 'Unknown')
        tiers.setdefault(t, []).append((item['name'], item['code']))
    for t in sorted(tiers.keys()):
        print(f'\n=== {t} ({len(tiers[t])} states) ===')
        for name, code in tiers[t]:
            print(f'  - {name} ({code})')
