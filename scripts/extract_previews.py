import fitz
import os
from PIL import Image, ImageFilter

output_dir = 'public/previews'
covers_dir = 'public/covers'
os.makedirs(output_dir, exist_ok=True)
os.makedirs(covers_dir, exist_ok=True)

ebooks = [
    {
        'id': 'excel-nol',
        'title': 'Belajar Excel Dari Nol',
        'subtitle': 'Panduan Komprehensif Pemula Sampai Mahir',
        'pages_total': 147,
        'path': 'Asset/E-Book Belajar Excel dari Nol.pdf',
        'cover_src': 'Asset/BELAJAR EXCEL DARI NOL.png',
        'preview_pages': 5, # pages 1 to 4 readable, page 5 preview blurred/locked
    },
    {
        'id': '72-rumus',
        'title': '72 Rumus Penting Excel',
        'subtitle': 'Katalog Rumus Kerja Nyata & Studi Kasus',
        'pages_total': 179,
        'path': 'Asset/E-Book 72 Rumus Excel.pdf',
        'cover_src': 'Asset/72 RUMUS PENTING EXCEL.jpeg',
        'preview_pages': 5,
    },
    {
        'id': '100-shortcut',
        'title': '100 Shortcut Excel Windows',
        'subtitle': 'Bekerja 5x Lebih Cepat Tanpa Sentuh Mouse',
        'pages_total': 20,
        'path': 'Asset/100 SHORTCUT EXCEL UNTUK WINDOWS (Windows).pdf',
        'cover_src': 'Asset/100 SHORTCUT EXCEL VERSI WINDOWS ONLY.png',
        'preview_pages': 5,
    }
]

# Copy/optimize covers
for eb in ebooks:
    if os.path.exists(eb['cover_src']):
        img = Image.open(eb['cover_src'])
        # Save as optimized web format
        out_cover = os.path.join(covers_dir, f"{eb['id']}-cover.png")
        # Resize if too huge (keep max dimension around 800)
        img.thumbnail((800, 1000), Image.Resampling.LANCZOS)
        img.save(out_cover, format='PNG', optimize=True)
        print(f"Cover saved: {out_cover} size={img.size}")

# Generate page previews
for eb in ebooks:
    if not os.path.exists(eb['path']):
        print(f"Not found: {eb['path']}")
        continue
    doc = fitz.open(eb['path'])
    total = len(doc)
    print(f"\nProcessing {eb['title']} ({total} pages total):")
    
    # We will generate first 3 regular pages, and page 4 as a blurred preview
    num_to_render = min(eb['preview_pages'], total)
    for p_idx in range(num_to_render):
        page = doc[p_idx]
        pix = page.get_pixmap(dpi=140)
        img_name = f"{eb['id']}-page-{p_idx + 1}.jpg"
        out_path = os.path.join(output_dir, img_name)
        pix.save(out_path)
        print(f"  Page {p_idx + 1} saved to {out_path} ({pix.width}x{pix.height})")
        
        # If this is the locked page threshold (e.g. page 4), also create a blurred preview version
        if p_idx == 3: # 4th page
            im = Image.open(out_path)
            # Create a blurred teaser version
            blurred = im.filter(ImageFilter.GaussianBlur(radius=12))
            blur_path = os.path.join(output_dir, f"{eb['id']}-page-{p_idx + 1}-locked.jpg")
            blurred.save(blur_path, quality=85)
            print(f"  Page {p_idx + 1} BLURRED saved to {blur_path}")

print("\nAll previews generated successfully!")
