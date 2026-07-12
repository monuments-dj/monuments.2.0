import sys, json
from PIL import Image, ExifTags
MODEL={'ILCE-7RM3':'A7R III','ILCE-7RM4':'A7R IV','ILCE-7RM5':'A7R V','ILCE-7M3':'A7 III','ILCE-7M4':'A7 IV','ILCE-7SM3':'A7S III','ILCE-9':'A9','ILCE-9M2':'A9 II','ILCE-1':'A1','ILCE-6600':'A6600'}
def frac(v):
    try:
        v=float(v)
        if v>=1: return f"1/{round(v)}" if False else (f"{v:g}s")
        return f"1/{round(1/v)}s"
    except: return None
def cam(path):
    try: img=Image.open(path); ex=img._getexif() or {}
    except: return ''
    t={ExifTags.TAGS.get(k,k):val for k,val in ex.items()}
    make=(t.get('Make') or '').strip().title().replace('Sony','Sony')
    model=(t.get('Model') or '').strip(); model=MODEL.get(model, model)
    body=(f"{make} {model}").strip()
    parts=[]
    if body: parts.append(body)
    fl=t.get('FocalLength')
    if fl: parts.append(f"{round(float(fl))}mm")
    fn=t.get('FNumber')
    if fn: parts.append(f"f/{float(fn):g}")
    et=t.get('ExposureTime')
    if et: parts.append(frac(et))
    iso=t.get('ISOSpeedRatings')
    if iso: parts.append(f"ISO {iso if not isinstance(iso,(list,tuple)) else iso[0]}")
    return ' · '.join([p for p in parts if p])
if __name__=='__main__':
    out={p: cam('public'+p) for p in sys.argv[1:]}
    print(json.dumps(out, indent=1))
