import base64
import json
import re
from pathlib import Path


def main() -> None:
    source = Path("images.json")
    output_dir = Path("src/assets")
    output_dir.mkdir(parents=True, exist_ok=True)

    images = json.loads(source.read_text(encoding="utf-8"))
    for index, data_url in enumerate(images, start=1):
        match = re.match(r"data:image/(\w+);base64,(.*)", data_url, re.S)
        if not match:
            continue
        ext = match.group(1).replace("jpeg", "jpg")
        image_bytes = base64.b64decode(match.group(2))
        (output_dir / f"doc-cave-{index:02d}.{ext}").write_bytes(image_bytes)

    print(f"Decoded {len(images)} images into {output_dir}")


if __name__ == "__main__":
    main()
