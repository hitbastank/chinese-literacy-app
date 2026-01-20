from PIL import Image
import os

def remove_checkerboard_and_trim(image_path, output_path):
    print(f"Processing {image_path}...")
    try:
        img = Image.open(image_path).convert("RGBA")
        width, height = img.size
        datas = img.getdata()
        
        # Sample the entire border (5px wide) to find background colors
        bg_colors = set()
        border_width = 5
        for x in range(width):
            for y in range(height):
                if x < border_width or x >= width - border_width or y < border_width or y >= height - border_width:
                    bg_colors.add(img.getpixel((x, y)))
        
        # Filter background colors: they should be neutral (grayish/black/white)
        # We increase tolerance for "neutrality" as compression artifacts might introduce color
        true_bg_colors = []
        for c in bg_colors:
            r, g, b, a = c
            # Check if color is roughly neutral (R ~= G ~= B)
            # Tolerance of 30 covers some noise
            if abs(r - g) < 30 and abs(g - b) < 30 and abs(r - b) < 30: 
                true_bg_colors.append(c)
        
        print(f"  Identified BG colors: {len(true_bg_colors)} distinct colors in border")
        
        new_data = []
        for item in datas:
            is_bg = False
            r, g, b, a = item
            
            # Check if pixel matches any identified BG color
            for bg_c in true_bg_colors:
                br, bg, bb, ba = bg_c
                # Strict match with small tolerance for noise
                if abs(r - br) < 10 and abs(g - bg) < 10 and abs(b - bb) < 10:
                    is_bg = True
                    break
            
            if is_bg:
                new_data.append((255, 255, 255, 0)) # Make transparent
            else:
                new_data.append(item)
        
        img.putdata(new_data)
        
        # Now trim (crop to bounding box)
        bbox = img.getbbox()
        if bbox:
            img = img.crop(bbox)
            print(f"  Trimmed to {bbox}")
        
        img.save(output_path, "PNG")
        print(f"  Saved to {output_path}")
        
    except Exception as e:
        print(f"  Error processing {image_path}: {e}")

# Process the specific files
base_dir = "/Users/liyifan/.gemini/antigravity/brain/6c491d02-bbd4-4d84-8c06-6082f5178a54/"
files = [
    "steve_head_pixel_1768900207843.png",
    "zombie_head_pixel_1768900332189.png"
]

for f in files:
    input_p = os.path.join(base_dir, f)
    # Output to the same directory with _trimmed suffix? Or overwrite? 
    # Let's create a new file to match the naming convention we want to use in assets, 
    # or just keep it simple and overwrite.
    # Actually, let's save as trimmed version.
    output_p = os.path.join(base_dir, f.replace(".png", "_trimmed.png"))
    remove_checkerboard_and_trim(input_p, output_p)
