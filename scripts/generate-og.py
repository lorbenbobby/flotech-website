#!/usr/bin/env python3
"""Generate public/og.png, the 1200x630 social share image for FloTech.

The image is produced at build time (see .github/workflows/deploy.yml) rather
than committed as a binary, so the whole site stays as reviewable text in the
repo. It only needs Pillow and the DejaVu fonts, both available on the CI
runner. Run locally with: python3 scripts/generate-og.py
"""

import math
import os

from PIL import Image, ImageDraw, ImageFont, ImageFilter

W, H = 1200, 630

# Brand palette (mirrors app/globals.css + tailwind.config.ts).
BG_TOP = (8, 17, 31)
BG_BOT = (4, 9, 17)
CYAN = (34, 211, 238)
BLUE = (88, 170, 255)
WHITE = (255, 255, 255)
MUTED = (143, 164, 188)
INK = (6, 18, 31)

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "..", "public", "og.png")

# Font lookup: try the common Linux/CI locations, then fall back gracefully.
_SANS_BOLD = ["DejaVuSans-Bold.ttf", "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"]
_SANS = ["DejaVuSans.ttf", "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"]
_MONO_BOLD = ["DejaVuSansMono-Bold.ttf", "/usr/share/fonts/truetype/dejavu/DejaVuSansMono-Bold.ttf"]


def font(candidates, size):
    for path in candidates:
        try:
            return ImageFont.truetype(path, size)
        except OSError:
            continue
    return ImageFont.load_default()


def lerp(a, b, t):
    return tuple(int(a[i] + (b[i] - a[i]) * t) for i in range(3))


def rounded_mask(size, radius):
    m = Image.new("L", size, 0)
    ImageDraw.Draw(m).rounded_rectangle([0, 0, size[0] - 1, size[1] - 1], radius=radius, fill=255)
    return m


def cube_icon(size):
    """The FloTech mark: a rounded gradient tile with a 3D cube outline.

    Geometry mirrors public/favicon.svg (a 40-unit viewBox), scaled to `size`.
    """
    ss = 4  # supersample for crisp edges
    s = size * ss
    tile = Image.new("RGBA", (s, s), (0, 0, 0, 0))
    grad = Image.new("RGB", (s, s))
    gd = ImageDraw.Draw(grad)
    for y in range(s):
        for_x = y / (s - 1)
        gd.line([(0, y), (s, y)], fill=lerp(BLUE, CYAN, for_x))
    grad.putalpha(rounded_mask((s, s), int(0.28 * s)))
    tile.alpha_composite(grad)

    k = s / 40.0
    d = ImageDraw.Draw(tile)

    def P(x, y):
        return (x * k, y * k)

    lw = max(2, int(2 * k))
    hexagon = [P(20, 8), P(31, 14), P(31, 26), P(20, 32), P(9, 26), P(9, 14)]
    d.line(hexagon + [hexagon[0]], fill=INK, width=lw, joint="curve")
    for seg in ([P(20, 8), P(20, 20)], [P(20, 20), P(31, 14)],
                [P(20, 20), P(20, 32)], [P(20, 20), P(9, 14)]):
        d.line(seg, fill=INK, width=lw, joint="curve")

    return tile.resize((size, size), Image.LANCZOS)


def main():
    img = Image.new("RGB", (W, H), BG_TOP)
    draw = ImageDraw.Draw(img)

    # Vertical background gradient.
    for y in range(H):
        draw.line([(0, y), (W, y)], fill=lerp(BG_TOP, BG_BOT, y / (H - 1)))

    overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    od = ImageDraw.Draw(overlay)

    # Faint blueprint grid.
    for x in range(0, W, 48):
        od.line([(x, 0), (x, H)], fill=(120, 150, 190, 12))
    for y in range(0, H, 48):
        od.line([(0, y), (W, y)], fill=(120, 150, 190, 12))

    # Translucent depth panels behind the constellation, right side.
    od.rounded_rectangle([770, 150, 1130, 470], radius=22, outline=(120, 160, 210, 26), width=2)
    od.rectangle([880, 230, 1000, 350], fill=(90, 150, 220, 14))
    img.paste(Image.alpha_composite(img.convert("RGBA"), overlay).convert("RGB"))

    # Soft cyan glow behind the cube.
    cube_cx, cube_cy = 940, 312
    glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    gd = ImageDraw.Draw(glow)
    gd.ellipse([cube_cx - 210, cube_cy - 210, cube_cx + 210, cube_cy + 210], fill=(34, 211, 238, 70))
    glow = glow.filter(ImageFilter.GaussianBlur(90))
    img = Image.alpha_composite(img.convert("RGBA"), glow).convert("RGB")
    draw = ImageDraw.Draw(img)

    # Node constellation around the cube (kept clear of the text block).
    nodes = [(800, 160), (975, 108), (1090, 188), (1150, 300),
             (1105, 420), (835, 506), (792, 232)]
    net = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    nd = ImageDraw.Draw(net)
    for nx, ny in nodes:
        nd.line([(cube_cx, cube_cy), (nx, ny)], fill=(120, 200, 235, 55), width=2)
    for i in range(len(nodes)):
        a = nodes[i]
        b = nodes[(i + 1) % len(nodes)]
        nd.line([a, b], fill=(120, 200, 235, 32), width=2)
    img = Image.alpha_composite(img.convert("RGBA"), net).convert("RGB")
    draw = ImageDraw.Draw(img)
    for nx, ny in nodes:
        draw.ellipse([nx - 5, ny - 5, nx + 5, ny + 5], fill=CYAN)
        draw.ellipse([nx - 9, ny - 9, nx + 9, ny + 9], outline=(34, 211, 238, 120), width=1)

    # Large cube mark.
    big = cube_icon(150)
    img.paste(big, (cube_cx - 75, cube_cy - 75), big)

    # Header logo, top-left.
    small = cube_icon(64)
    img.paste(small, (80, 70), small)
    wm_bold = font(_SANS_BOLD, 38)
    draw.text((158, 78), "Flo", font=wm_bold, fill=WHITE)
    flo_w = draw.textlength("Flo", font=wm_bold)
    draw.text((158 + flo_w, 78), "Tech", font=wm_bold, fill=CYAN)

    # Eyebrow.
    eyebrow = font(_MONO_BOLD, 22)
    draw.text((82, 248), "BLOCKCHAIN", font=eyebrow, fill=CYAN)
    bc_w = draw.textlength("BLOCKCHAIN", font=eyebrow)
    draw.text((82 + bc_w + 24, 248), "·", font=eyebrow, fill=MUTED)
    draw.text((82 + bc_w + 48, 248), "ONTARIO, CANADA", font=eyebrow, fill=CYAN)

    # Headline (two lines, accent on the closing phrase).
    head = font(_SANS_BOLD, 54)
    draw.text((80, 302), "Blockchain infrastructure", font=head, fill=WHITE)
    draw.text((80, 368), "built for ", font=head, fill=WHITE)
    bf_w = draw.textlength("built for ", font=head)
    draw.text((80 + bf_w, 368), "real business.", font=head, fill=CYAN)

    # Subline.
    sub = font(_SANS, 26)
    draw.text((82, 452), "Smart contracts  ·  Tokenization  ·  Web3 platforms  ·  Secure software",
              font=sub, fill=MUTED)

    # Footer divider + identifiers.
    draw.line([(80, 556), (1120, 556)], fill=(255, 255, 255), width=1)
    foot = font(_MONO_BOLD, 24)
    draw.text((80, 580), "floriantechnologies.ca", font=foot, fill=WHITE)
    email = font(_SANS, 23)
    em = "contact@floriantechnologies.ca"
    draw.text((1120 - draw.textlength(em, font=email), 582), em, font=email, fill=MUTED)

    img.save(OUT, "PNG")
    print("wrote", os.path.normpath(OUT), img.size)


if __name__ == "__main__":
    main()
